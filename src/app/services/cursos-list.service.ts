import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICursoData } from '../interfaces/cursoData';

@Injectable({
  providedIn: 'root'
})
export class CursosListService {
  private cursosList: Array<ICursoData> = [];
  private cursos$ = new BehaviorSubject<ICursoData[]>(this.cursosList);
  
  constructor() { }

  agregarCursos(cursos: Array<ICursoData>){
    var collator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'});
    this.cursosList = cursos.sort((a,b) => collator.compare(a.nombre, b.nombre));
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
