import { Component, OnInit } from '@angular/core';
import { SectionService } from 'src/app/services/section.service';
import { NAV_ITEMS } from 'src/constants/items';
import { INavItem } from '../../ui/header-link/header-link.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  headerNavItems: Array<INavItem> = NAV_ITEMS;
  sectionActive: string = 'ADULTOS';

  constructor(private sectionSrv: SectionService) { }

  ngOnInit() {
    this.getSectionActive();
  }

  getSectionActive(){
    this.sectionActive = this.sectionSrv.getSectionActive();
  }

}

