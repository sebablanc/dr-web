import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import calculateDifferenceInDays from './dateUtils';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class UserLoggedService {

  private userLogged: boolean;
  private userLoggedObservable = new Observable((observer) => {
    // observable execution
    observer.next(this.userLogged);
    observer.complete();
  })
  
  constructor(private localStorageSrv: LocalstorageService) { }

  isUserLogged$() {
    return this.userLoggedObservable;
  }

  isUserLogged(){
    return this.userLogged;
  }

  async checkUserIsLogged() {
    let loginDate: string = this.localStorageSrv.getItem('loginDate');
    var difference = calculateDifferenceInDays(loginDate);
    if (difference > 3) {
      this.userLogged = false;
      this.localStorageSrv.removeItems();
    } else {
      this.userLogged = true;
    }
  }
}
