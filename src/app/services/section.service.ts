import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SectionService {
  private sectionActive: string = 'ADULTOS';
  constructor() { }

  setSectionActive(section: string){
    this.sectionActive = section;
  }

  getSectionActive() {
    return this.sectionActive;
  }
}
