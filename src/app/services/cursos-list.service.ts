import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable,  Subject } from 'rxjs';
import { ICursoData } from '../interfaces/cursoData';

@Injectable({
  providedIn: 'root'
})
export class CursosListService {
  private cursosList: Array<ICursoData> = [];
  private cursos$ = new BehaviorSubject<ICursoData[]>(this.cursosList);
  constructor() { }

  agregarCursos(cursos: Array<ICursoData>){
    this.cursosList = cursos;
    this.cursos$.next(this.cursosList);
  }

  agregarCurso(curso: ICursoData){
    this.cursosList.push(curso);
    this.cursos$.next(this.cursosList);
  }

  getCursos$(): Observable<ICursoData[]> {
    return this.cursos$.asObservable();
  }
}
