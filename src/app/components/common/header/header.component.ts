import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { SectionService } from 'src/app/services/section.service';
import { NAV_ITEMS, RS_LINKS } from 'src/constants/items';
import { INavItem } from '../../ui/header-link/header-link.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  headerNavItems: Array<INavItem> = NAV_ITEMS;
  headerRSItems: Array<any> = RS_LINKS;
  sectionActive: string = 'ADULTOS';

  constructor(private sectionSrv: SectionService, private navigationSrv: NavigationService) { }

  ngOnInit() {
    this.getSectionActive();
  }

  getSectionActive(){
    this.sectionActive = this.sectionSrv.getSectionActive();
  }

  goTo(link: string){
    this.navigationSrv.goTo(link)
  }

  goToExternal(link: string){
    this.navigationSrv.goToExternal(link);
  }

}

