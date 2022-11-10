import { Injectable } from '@angular/core';
import { CursosListService } from './cursos-list.service';
import { FirestoreService } from './firestore.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private collectionName = 'Cursos';

  constructor(private firestoreSrv: FirestoreService, private storage: AngularFireStorage, private cursosListSrv: CursosListService) { }

  crear_curso(element) {
    delete element.id;
    return this.firestoreSrv.crear(this.collectionName, element);
  }

  editar_curso(element) {
    const id = element.id;
    delete element.id;
    return this.firestoreSrv.editar(this.collectionName, id, element);
  }

  eliminar_curso(id: string) {
    return this.firestoreSrv.eliminar(this.collectionName, id);
  }

  async obtener_cursos() {
    this.firestoreSrv.obtener_todos(this.collectionName).subscribe(async data => {
      const cursos = data.map(c => {
        return {
          id: c.payload.doc.id,
          nombre: c.payload.doc.data()['nombre'],
          categoria: c.payload.doc.data()['categoria'],
          descripcion: c.payload.doc.data()['descripcion'],
          imagen: c.payload.doc.data()['imagen']
        };
      });
      this.cursosListSrv.agregarCursos(cursos);
    })
  }
}
