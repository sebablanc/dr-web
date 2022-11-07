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
      {id: '1', nombre: 'Reparacion de PC I', categoria: 'ADULTOS', descripcion: 'DESCRIPCION DEL CURSO'},
      {id: '2', nombre: 'Reparacion de PC II', categoria: 'ADULTOS', descripcion: 'DESCRIPCION DEL CURSO'},
      {id: '3', nombre: 'Windows, Word y Excel', categoria: 'KIDS', descripcion: 'DESCRIPCION DEL CURSO'},
      {id: '4', nombre: 'CorelDraw', categoria: 'ADULTOS', descripcion: 'DESCRIPCION DEL CURSO'},
    ];
    setTimeout(() => {
      this.cursosListSrv.agregarCursos(cursos);
    }, 1000);
  }
}
