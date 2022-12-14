import { Component, OnInit } from '@angular/core';
import { ICursoData } from 'src/app/interfaces/cursoData';
import { Observable } from 'rxjs';
import { CursosListService } from 'src/app/services/cursos-list.service';
import { SECTION_TYPES } from 'src/constants/items';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  cursosAdultos: Array<ICursoData>;
  cursosKids: Array<ICursoData>;
  private cursos$: Observable<ICursoData[]>;
  
  constructor(private cursosListSrv: CursosListService) {}

  ngOnInit(): void {
    this.cursos$ = this.cursosListSrv.getCursos$();
    this.cursos$.subscribe(cursos =>{
      this.cursosAdultos = cursos.filter(c => c.categoria == SECTION_TYPES.ADULTOS);
      this.cursosKids = cursos.filter(c => c.categoria == SECTION_TYPES.KIDS);
    });
  }

}
