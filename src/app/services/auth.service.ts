import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { loginData } from '../interfaces/authData';
import { LocalstorageService } from './localstorage.service';
import { UserLoggedService } from './user-logged.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth,
    private localStorageSrv: LocalstorageService,
    private userLoggedSrv: UserLoggedService) { }

  async login(value: loginData) {
    try{
      let resp = await this.auth.signInWithEmailAndPassword(value.email, value.password);
      if(resp && resp.user.multiFactor['user'] && resp.user.multiFactor['user']['accessToken']){
        this.localStorageSrv.saveItem('accessToken', resp.user.multiFactor['user']['accessToken']);
        this.localStorageSrv.saveItem('loginDate', new Date().toString());
      }
      this.userLoggedSrv.checkUserIsLogged();
      return true;
    } catch(e){
      return false;
    }
  }

  async logout() {
    this.localStorageSrv.removeItems();
    await this.auth.signOut();
    this.userLoggedSrv.checkUserIsLogged();
    window.location.reload();
  }
}
