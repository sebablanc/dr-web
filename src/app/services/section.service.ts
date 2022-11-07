import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SectionService {
  private sectionActive: string = 'ADULTOS';
  private sectionActive$ = new BehaviorSubject<string>(this.sectionActive);
  constructor() { }

  setSectionActive(section: string){
    this.sectionActive = section;
    this.sectionActive$.next(this.sectionActive);
  }

  getSectionActive$(): Observable<string> {
    return this.sectionActive$.asObservable();
  }
}
