import { Component, OnInit } from '@angular/core';
import { IRoundButtonConfig } from 'src/app/components/ui/round-button/round-button.component';
import { ROUNDED_BUTTONS_ICONS } from 'src/constants/items';

@Component({
  selector: 'app-curso-detail',
  templateUrl: './curso-detail.page.html',
  styleUrls: ['./curso-detail.page.scss'],
})
export class CursoDetailPage implements OnInit {
  editRoundButtonConfig: IRoundButtonConfig = {
    iconName: ROUNDED_BUTTONS_ICONS.EDIT,
    extraClass: null
  }
  deleteRoundButtonConfig: IRoundButtonConfig = {
    iconName: ROUNDED_BUTTONS_ICONS.DELETE ,
    extraClass: 'second-button'
  }
  constructor() { }

  ngOnInit() {
  }

  showEditModal() {
    console.log('showEditModal');
  }

  deleteCurso() {
    console.log('deleteCurso');
  }
}
