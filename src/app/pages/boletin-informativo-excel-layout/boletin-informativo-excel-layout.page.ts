import { Component, Input, OnInit } from '@angular/core';
import { INovedadData } from 'src/app/interfaces/novedadData';
import { LoadingService } from 'src/app/services/loading.service';
import { ModalService } from 'src/app/services/modal.service';
import { NovedadesService } from 'src/app/services/novedades.service';
import * as XLSX from 'xlsx';
import { OPERATION_TYPES, RESULTS_TYPES } from '../delete-messages/delete-messages.page';

@Component({
  selector: 'app-boletin-informativo-excel-layout',
  templateUrl: './boletin-informativo-excel-layout.page.html',
  styleUrls: ['./boletin-informativo-excel-layout.page.scss'],
})
export class BoletinInformativoExcelLayoutPage implements OnInit {
  @Input() title: string;

  constructor(
    private modalSrv: ModalService,
    private loadingSrv: LoadingService,
    private novedadesSrv: NovedadesService) { }

  ngOnInit() {
  }

  async showMessagesWarning(file) {
    this.modalSrv.dismissModal(false);

    if (!file) return;

    //muestro mensaje de advertencia para cargar el archivo
    let algo = await this.modalSrv.showDeleteMessagesModal(OPERATION_TYPES.EXCEL_LOAD, RESULTS_TYPES.WARNING_EXCEL, file.name);

    //si selecciona cancelar vuelvo al modal de carga
    if (!algo.data) {
      this.modalSrv.showCursoExcelModal('Importar archivo Excel');
      return;
    }

    // si se selecciona cargar, entonces cierro el modal de carga y proceso el archivo
    this.procesarArchivo(file);
  }

  procesarArchivo(file) {
    this.loadingSrv.showDRLoading();
    let fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file);
    fileReader.onload = async (e) => {
      const arrayBuffer = fileReader.result as (ArrayBuffer);
      var data = new Uint8Array(arrayBuffer);
      var arr = new Array();
      for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join("");
      var workbook = XLSX.read(bstr, { type: "binary" });
      var first_sheet_name = workbook.SheetNames[0];
      var worksheet = workbook.Sheets[first_sheet_name];
      var arraylist = XLSX.utils.sheet_to_json(worksheet, { raw: true }) as Array<INovedadData>;
      arraylist.forEach(async novedad => {
        if (novedad && novedad.titulo !== '' && novedad.mensaje !== '') {
          let obj: INovedadData = {
            id: '',
            link: novedad.link || '',
            mensaje: novedad.mensaje,
            titulo: novedad.titulo
          }
          await this.novedadesSrv.crear_novedad(obj);
        });
    }
    setTimeout(() => {
      this.loadingSrv.dismissLoading();
    }, 1000)
  }
}
}
