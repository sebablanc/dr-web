import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { SectionService } from 'src/app/services/section.service';
import { UserLoggedService } from 'src/app/services/user-logged.service';
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
  subscriber: Subscription;
  userLogged: boolean;
  constructor(
    private sectionSrv: SectionService,
    private navigationSrv: NavigationService,
    private userLoggedSrv: UserLoggedService,
    private authSrv: AuthService) {
  }

  ngOnInit() {
    this.getSectionActive();
    this.subscriber = this.userLoggedSrv.isUserLogged$().subscribe((value: boolean)=>{
      this.userLogged = value;
    });
  }

  ngOnDestroy(){
    this.subscriber.unsubscribe();
  }

  getSectionActive() {
    this.sectionActive = this.sectionSrv.getSectionActive();
  }

  goTo(link: string) {
    this.navigationSrv.goTo(link)
  }

  goToExternal(link: string) {
    this.navigationSrv.goToExternal(link);
  }

  logout() {
    this.authSrv.logout();
  }

}

