import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso-form-page',
  templateUrl: './curso-form.page.html',
  styleUrls: ['./curso-form.page.scss'],
})
export class CursoFormPage implements OnInit {
  @Input() title: string = '';
  constructor() { }

  ngOnInit() {
  }

}
