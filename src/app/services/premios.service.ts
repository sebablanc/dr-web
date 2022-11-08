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
    return this.firestoreSrv.crear(this.collectionName, element);
  }

  editar_premio(element) {
    const id = element.id;
    delete element.id;
    return this.firestoreSrv.editar(this.collectionName, id, element);
  }

  eliminar_premio(id: string) {
    return this.firestoreSrv.eliminar(this.collectionName, id);
  }

  async obtener_premios(year: string) {
    if(year == null) year = new Date().getFullYear().toString();
    this.firestoreSrv.get_collection_by_field(this.collectionName, 'year', year).subscribe(data => {
      console.log(data);
      this.premiosListSrv.agregarPremios(data as Array<IPremioData>);
    })
  }
}
