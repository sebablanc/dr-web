import { Component, Input, OnInit } from '@angular/core';
import { ICursoData } from 'src/app/interfaces/cursoData';
import { NavigationService } from 'src/app/services/navigation.service';
import { SectionService } from 'src/app/services/section.service';
import { LOGOS_URLS, SECTION_TYPES } from 'src/constants/items';

@Component({
  selector: 'app-push-button',
  templateUrl: './push-button.component.html',
  styleUrls: ['./push-button.component.scss'],
})
export class PushButtonComponent implements OnInit {
  @Input() item: ICursoData = null;
  sectionsTypes = SECTION_TYPES;
  logosUrls = LOGOS_URLS;

  constructor(
    private navigationSrv: NavigationService) { }

  ngOnInit() {}

  goTo(){
    this.navigationSrv.goToCursoDetail(this.item);
  }

}
