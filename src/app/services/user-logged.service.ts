import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import calculateDifferenceInDays from './dateUtils';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class UserLoggedService {

  private userLogged: boolean = false;
  private userLogged$ = new BehaviorSubject<boolean>(this.userLogged);
  
  constructor(private localStorageSrv: LocalstorageService) { }

  isUserLogged$(): Observable<boolean> {
    return this.userLogged$.asObservable();
  }

  setUserLogged(userLogged: boolean){
    this.userLogged = userLogged;
    this.userLogged$.next(this.userLogged);
  }

  async checkUserIsLogged() {
    let loginDate: string = this.localStorageSrv.getItem('loginDate');
    var difference = calculateDifferenceInDays(loginDate);
    if (difference > 3) {
      this.localStorageSrv.removeItems();
      this.setUserLogged(false);
    } else {
      this.setUserLogged(true);
    }
  }
}
