import { Injectable } from '@angular/core';
import { ICursoData } from '../interfaces/cursoData';
import { CursosListService } from './cursos-list.service';
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  collectionName = 'Cursos';

  constructor(private firestoreSrv: FirestoreService, private cursosListSrv: CursosListService) { }

  crear_curso(element) {
    //return this.firestoreSrv.crear(this.collectionName, element);
    setTimeout(() => {
      this.cursosListSrv.agregarCurso(element);
    }, 1000);
  }

  obtener_cursos(){
    let cursos: Array<ICursoData> = [
      {nombre: 'Reparacion de PC I', categoria: 'ADULTOS', descripcion: 'DESCRIPCION DEL CURSO'},
      {nombre: 'Reparacion de PC II', categoria: 'ADULTOS', descripcion: 'DESCRIPCION DEL CURSO'},
      {nombre: 'Windows, Word y Excel', categoria: 'ADULTOS', descripcion: 'DESCRIPCION DEL CURSO'},
      {nombre: 'CorelDraw', categoria: 'ADULTOS', descripcion: 'DESCRIPCION DEL CURSO'},
    ];
    setTimeout(() => {
      this.cursosListSrv.agregarCursos(cursos);
    }, 1000);
  }
}
