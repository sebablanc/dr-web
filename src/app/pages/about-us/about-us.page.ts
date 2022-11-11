import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage implements OnInit {
  institutoEmail = environment.instituteEmail;
  telefono = environment.telefono;

  constructor() { }

  ngOnInit() {
  }

}
