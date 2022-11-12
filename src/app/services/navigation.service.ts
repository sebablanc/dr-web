import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { SECTION_TYPES } from 'src/constants/items';
import { ICursoData } from '../interfaces/cursoData';
import { SectionService } from './section.service';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private linkActive: string = 'home';
  private linkActive$ = new BehaviorSubject<string>(this.linkActive);

  constructor(private router: Router, private location: Location, private sectionSrv: SectionService) { }

  goTo(link: string){
    this.linkActive = link.split('/')[0];
    this.linkActive$.next(this.linkActive);
    this.router.navigate([`/${link}`]);
  }

  goBack(){
    this.location.back();
  }

  goToExternal(link: string){
    window.open(link, '_blank');
  }

  getLinkActive$(): Observable<string> {
    return this.linkActive$.asObservable();
  }

  goToCursoDetail(curso: ICursoData){
    this.sectionSrv.setSectionActive(curso.categoria);
    const link = curso.categoria == SECTION_TYPES.ADULTOS ? 'dr-computers' : 'dr-kids';
    this.goTo(`${link}/${curso.id}`);
  }
}
