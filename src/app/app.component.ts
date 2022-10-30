import { Component } from '@angular/core';
import { NavigationService } from './services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private navigationSrv: NavigationService) {}

  ngOnInit(){
    this.navigationSrv.goTo('home');
  }
}
