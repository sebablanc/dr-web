import { Injectable } from '@angular/core';
import { IPremioData } from '../interfaces/premioData';
import { FirestoreService } from './firestore.service';
import { PremiosListService } from './premios-list.service';

@Injectable({
  providedIn: 'root'
})
export class PremiosService {
  private collectionName = 'Premios';

  constructor(
    private firestoreSrv: FirestoreService,
    private premiosListSrv: PremiosListService
  ) { }

  crear_premio(element) {
    delete element.id;
    element = {
      ...element,
      year: parseInt(element.year),
      numeroCupon: parseInt(element.numeroCupon),
    }
    return this.firestoreSrv.crear(this.collectionName, element);
  }

  editar_premio(element) {
    const id = element.id;
    delete element.id;
    element = {
      ...element,
      year: parseInt(element.year),
      numeroCupon: parseInt(element.numeroCupon),
    }
    return this.firestoreSrv.editar(this.collectionName, id, element);
  }

  eliminar_premio(id: string) {
    return this.firestoreSrv.eliminar(this.collectionName, id);
  }

  async obtener_premios(year: number) {
    if(year == null) year = new Date().getFullYear();
    this.firestoreSrv.get_collection_by_field(this.collectionName, 'year', year).subscribe(data => {
      data.sort((a, b) => parseInt(a['mes']) > parseInt(b['mes']) ? 1 : -1);
      this.premiosListSrv.agregarPremios(data as Array<IPremioData>);
    })
  }
}
