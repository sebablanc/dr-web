import { Component } from '@angular/core';
import { NavigationService } from './services/navigation.service';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { environment } from 'src/environments/environment';
import { UserLoggedService } from './services/user-logged.service';
import { LoadingService } from './services/loading.service';
import { CursosService } from './services/cursos.service';
import { NovedadesService } from './services/novedades.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private navigationSrv: NavigationService,
    private userLoggedSrv: UserLoggedService,
    private loadingSrv: LoadingService,
    private cursosSrv: CursosService,
    private novedadesSrv: NovedadesService) {}

  async ngOnInit(){
    await this.loadingSrv.showDRLoading();
    const app = initializeApp(environment.firebaseConfig);
    const analytics = getAnalytics(app);

    this.userLoggedSrv.checkUserIsLogged();
    await this.cursosSrv.obtener_cursos();
    await this.novedadesSrv.obtener_novedades();
    setTimeout(() => {
      this.loadingSrv.dismissLoading();
    }, 1000);
    this.navigationSrv.goTo('home');
  }
}
