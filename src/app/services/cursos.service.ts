import { Injectable } from '@angular/core';
import { ICursoData } from '../interfaces/cursoData';
import { CursosListService } from './cursos-list.service';
import { FirestoreService } from './firestore.service';


const CURSOS_PRUEBA = [
  { id: '1', nombre: 'Reparacion de PC I', categoria: 'ADULTOS', descripcion: 'DESCRIPCION DEL CURSO' },
  { id: '2', nombre: 'Reparacion de PC II', categoria: 'ADULTOS', descripcion: 'DESCRIPCION DEL CURSO' },
  { id: '3', nombre: 'Windows, Word y Excel', categoria: 'KIDS', descripcion: 'DESCRIPCION DEL <b>CURSO</b>' },
  { id: '4', nombre: 'CorelDraw', categoria: 'ADULTOS', descripcion: 'DESCRIPCION DEL CURSO' },
];

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  collectionName = 'Cursos';

  constructor(private firestoreSrv: FirestoreService, private cursosListSrv: CursosListService) { }

  crear_curso(element) {
    return this.firestoreSrv.crear(this.collectionName, element);
  }

  async obtener_cursos() {
    this.firestoreSrv.obtener_todos(this.collectionName).subscribe(data => {
      const cursos = data.map(c => {
        return {
          id: c.payload.doc.id,
          nombre: c.payload.doc.data()['nombre'],
          categoria: c.payload.doc.data()['categoria'],
          descripcion: c.payload.doc.data()['descripcion']
        };
      });
      this.cursosListSrv.agregarCursos(cursos);
    })
  }
}
