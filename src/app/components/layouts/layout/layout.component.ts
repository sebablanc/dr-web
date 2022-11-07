import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SectionService } from 'src/app/services/section.service';
import { SECTION_TYPES } from 'src/constants/items';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  sectionTypes = SECTION_TYPES;
  sectionActive: string;
  private sectionActive$: Observable<string>;

  constructor(private sectionSrv: SectionService) { }

  ngOnInit() {
    this.sectionActive$ = this.sectionSrv.getSectionActive$();
    this.sectionActive$.subscribe(sectionActive => this.sectionActive = sectionActive);
  }
}
