import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { NavigationService } from 'src/app/services/navigation.service';
import { SectionService } from 'src/app/services/section.service';

@Component({
  selector: 'app-header-link',
  templateUrl: './header-link.component.html',
  styleUrls: ['./header-link.component.scss'],
})
export class HeaderLinkComponent implements OnInit {
  @Input() navItem: INavItem = null;
  @Output() navItemClicked: EventEmitter<boolean> = new EventEmitter();
  linkActive: string;
  private linkActive$: Observable<string>;
  
  constructor(
    private navigationSrv: NavigationService,
    private sectionSrv: SectionService) { }

  ngOnInit() {
    this.linkActive$ = this.navigationSrv.getLinkActive$();
    this.linkActive$.subscribe(linkActive => this.linkActive = linkActive);
  }

  goTo(){
    this.navItemClicked.emit(true);
    this.sectionSrv.setSectionActive(this.navItem.section);
    this.navigationSrv.goTo(this.navItem.link);
  }

}

export interface INavItem {
  text: string,
  link: string,
  section: string
}
