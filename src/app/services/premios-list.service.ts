import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { IPremioData } from '../interfaces/premioData';

@Injectable({
  providedIn: 'root'
})
export class PremiosListService {
  private premiosList: Array<IPremioData> = [];
  private premios$ = new BehaviorSubject<IPremioData[]>(this.premiosList);
  
  constructor() { }

  agregarPremios(premios: Array<IPremioData>){
    this.premiosList = premios;
    this.premios$.next(this.premiosList);
  }

  agregarPremio(novedad: IPremioData){
    this.premiosList.push(novedad);
    this.premios$.next(this.premiosList);
  }

  getPremios$(): Observable<IPremioData[]> {
    return this.premios$.asObservable();
  }
}
