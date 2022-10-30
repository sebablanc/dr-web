import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private linkActive: string = 'home';

  constructor(private router: Router) { }

  goTo(link: string){
    this.linkActive = link;
    this.router.navigate([`/${link}`]);
  }

  getLinkActive() {
    return this.linkActive;
  }
}
