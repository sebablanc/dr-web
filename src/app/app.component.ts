import { Component } from '@angular/core';
import { NavigationService } from './services/navigation.service';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private navigationSrv: NavigationService) {}

  ngOnInit(){
    const app = initializeApp(environment.firebaseConfig);
    const analytics = getAnalytics(app);
    this.navigationSrv.goTo('home');
  }
}
