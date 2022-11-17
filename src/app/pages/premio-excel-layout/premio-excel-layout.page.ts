import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { OPERATION_TYPES, RESULTS_TYPES } from '../delete-messages/delete-messages.page';
import * as XLSX from 'xlsx';
import { LoadingService } from 'src/app/services/loading.service';
import { PremiosService } from 'src/app/services/premios.service';
import { IPremioData } from 'src/app/interfaces/premioData';

@Component({
  selector: 'app-premio-excel-layout',
  templateUrl: './premio-excel-layout.page.html',
  styleUrls: ['./premio-excel-layout.page.scss'],
})
export class PremioExcelLayoutPage implements OnInit {
  @Input() title: string;


  constructor(
    private modalSrv: ModalService,
    private loadingSrv: LoadingService,
    private premiosSrv: PremiosService) { }

  ngOnInit() {
  }

  async showMessagesWarning(file) {
    this.modalSrv.dismissModal(false);

    if (!file) return;

    //muestro mensaje de advertencia para cargar el archivo
    let algo = await this.modalSrv.showDeleteMessagesModal(OPERATION_TYPES.EXCEL_LOAD, RESULTS_TYPES.WARNING_EXCEL, file.name);

    //si selecciona cancelar vuelvo al modal de carga
    if (!algo.data) {
      this.modalSrv.showPremioExcelModal('Importar archivo Excel');
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
      var premiosList = XLSX.utils.sheet_to_json(worksheet, { raw: true }) as Array<IPremioData>;
      premiosList.forEach(async premio => {
        if (
          premio &&
          premio.horarioExtraccion !== '' &&
          premio.mes !== '' &&
          premio.nombreFavorecido !== '' &&
          premio.nombreRetiro !== '' &&
          premio.numeroCupon > 1 &&
          premio.tipoSorteo !== '' &&
          premio.year > 1997) {
          let premioToAdd: IPremioData = {
            id: '',
            year: premio.year || new Date().getFullYear(),
            mes: premio.mes || '',
            numeroCupon: premio.numeroCupon || 0,
            nombreFavorecido: premio.nombreFavorecido || '',
            nombreRetiro: premio.nombreRetiro || '',
            horarioExtraccion: premio.horarioExtraccion || '',
            tipoSorteo: premio.tipoSorteo.toUpperCase() || '',
            imagen: premio.imagen || '',
            premioConsuelo: premio.premioConsuelo || '',
            linkNoticia: premio.linkNoticia || ''
          }
          await this.premiosSrv.crear_premio(premioToAdd);
        }
      });
      await this.premiosSrv.obtener_premios(null);
      setTimeout(() => {
        this.loadingSrv.dismissLoading();
      }, 1000)
    }
  }

}
