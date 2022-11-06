import { Component } from '@angular/core';
import { NavigationService } from './services/navigation.service';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { environment } from 'src/environments/environment';
import { UserLoggedService } from './services/user-logged.service';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private navigationSrv: NavigationService,
    private userLoggedSrv: UserLoggedService,
    private loadingSrv: LoadingService) {}

  ngOnInit(){
    this.loadingSrv.showDRLoading();
    const app = initializeApp(environment.firebaseConfig);
    const analytics = getAnalytics(app);

    this.userLoggedSrv.checkUserIsLogged();
    setTimeout(() => {
      this.loadingSrv.dismissLoading();
    }, 1000);
    this.navigationSrv.goTo('home');
  }
}
