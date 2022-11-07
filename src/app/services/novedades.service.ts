import { Injectable } from '@angular/core';
import { FirestoreService } from './firestore.service';
import { NovedadesListService } from './novedades-list.service';

@Injectable({
  providedIn: 'root'
})
export class NovedadesService {
  private collectionName = 'Novedades';
  constructor(
    private novedadesListSrv: NovedadesListService,
    private firestoreSrv: FirestoreService
  ) { }

  crear_novedad(element) {
    delete element.id;
    return this.firestoreSrv.crear(this.collectionName, element);
  }

  editar_novedad(element) {
    const id = element.id;
    delete element.id;
    return this.firestoreSrv.editar(this.collectionName, id, element);
  }

  eliminar_novedad(id: string){
    return this.firestoreSrv.eliminar(this.collectionName, id);
  }

  async obtener_novedades() {
    this.firestoreSrv.obtener_todos(this.collectionName).subscribe(data => {
      const novedades = data.map(c => {
        return {
          id: c.payload.doc.id,
          titulo: c.payload.doc.data()['titulo'],
          mensaje: c.payload.doc.data()['mensaje'],
          link: c.payload.doc.data()['link']
        };
      });
      this.novedadesListSrv.agregarNovedades(novedades);
    })
  }
}
