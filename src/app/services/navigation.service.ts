import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private linkActive: string = 'home';
  private linkActive$ = new BehaviorSubject<string>(this.linkActive);

  constructor(private router: Router) { }

  goTo(link: string){
    this.linkActive = link.split('/')[0];
    this.linkActive$.next(this.linkActive);
    this.router.navigate([`/${link}`]);
  }

  goToExternal(link: string){
    window.open(link, '_blank');
  }

  getLinkActive$(): Observable<string> {
    return this.linkActive$.asObservable();
  }
}
