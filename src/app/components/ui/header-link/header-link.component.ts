import { Component, Input, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { SectionService } from 'src/app/services/section.service';

@Component({
  selector: 'app-header-link',
  templateUrl: './header-link.component.html',
  styleUrls: ['./header-link.component.scss'],
})
export class HeaderLinkComponent implements OnInit {
  @Input() navItem: INavItem = null;
  linkActive: string = '';
  constructor(
    private navigationSrv: NavigationService,
    private sectionSrv: SectionService) { }

  ngOnInit() {
     this.getLinkActive();
  }

  goTo(){
    this.navigationSrv.goTo(this.navItem.link);
    this.sectionSrv.setSectionActive(this.navItem.section);
  }

  getLinkActive(){
    this.linkActive = this.navigationSrv.getLinkActive();
  }

}

export interface INavItem {
  text: string,
  link: string,
  section: string
}
