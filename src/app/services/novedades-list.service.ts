import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { INovedadData } from '../interfaces/novedadData';

@Injectable({
  providedIn: 'root'
})
export class NovedadesListService {
  private novedadesList: Array<INovedadData> = [];
  private novedades$ = new BehaviorSubject<INovedadData[]>(this.novedadesList);
  
  constructor() { }

  agregarNovedades(novedades: Array<INovedadData>){
    this.novedadesList = novedades;
    this.novedades$.next(this.novedadesList);
  }

  agregarNovedad(novedad: INovedadData){
    this.novedadesList.push(novedad);
    this.novedades$.next(this.novedadesList);
  }

  getNovedades$(): Observable<INovedadData[]> {
    return this.novedades$.asObservable();
  }
}
