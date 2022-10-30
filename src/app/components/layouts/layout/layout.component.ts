import { Component, OnInit } from '@angular/core';
import { SectionService } from 'src/app/services/section.service';
import { SECTION_TYPES } from 'src/constants/items';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  sectionTypes: Object = SECTION_TYPES;
  sectionActive: string = 'ADULTOS';

  constructor(private sectionSrv: SectionService) { }

  ngOnInit() {
    this.getSectionActive();
  }

  getSectionActive() {
    this.sectionActive = this.sectionSrv.getSectionActive();
  }
}
