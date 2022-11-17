import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CheckboxCustomEvent } from '@ionic/angular';
import { ICursoData } from 'src/app/interfaces/cursoData';
import { NavigationService } from 'src/app/services/navigation.service';
import { Observable } from 'rxjs';
import { UserLoggedService } from 'src/app/services/user-logged.service';
import { LOGOS_URLS, SECTION_TYPES } from 'src/constants/items';

@Component({
  selector: 'app-push-button',
  templateUrl: './push-button.component.html',
  styleUrls: ['./push-button.component.scss'],
})
export class PushButtonComponent implements OnInit {
  @Input() curso: ICursoData = null;
  @Input() showCheckbox: boolean = false;
  @Input() isChecked: boolean = false;
  @Output() cursoChecked: EventEmitter<{checked: boolean, cursoId: string}> = new EventEmitter();
  sectionsTypes = SECTION_TYPES;
  logosUrls = LOGOS_URLS;
  userLogged: boolean;
  private userLogged$: Observable<boolean>;

  constructor(
    private navigationSrv: NavigationService,
    private userLoggedSrv: UserLoggedService) { }

  ngOnInit() {
    this.checkingUserLogged();
  }

  checkingUserLogged(){
    this.userLogged$ = this.userLoggedSrv.isUserLogged$();
    this.userLogged$.subscribe(isLogged => this.userLogged = isLogged);
  }

  goTo(){
    this.navigationSrv.goToCursoDetail(this.curso);
  }

  emitCursoChecked(event: CheckboxCustomEvent){
    this.isChecked = event.detail.checked;
    this.cursoChecked.emit({checked: this.isChecked, cursoId: this.curso.id});
  }

}
