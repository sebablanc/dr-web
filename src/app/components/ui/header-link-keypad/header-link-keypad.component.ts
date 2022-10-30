import { Component, Input, OnInit } from '@angular/core';
import { INavItem } from '../header-link/header-link.component';

@Component({
  selector: 'app-header-link-keypad',
  templateUrl: './header-link-keypad.component.html',
  styleUrls: ['./header-link-keypad.component.scss'],
})
export class HeaderLinkKeypadComponent implements OnInit {

  @Input() headerNavItems: Array<INavItem> = []

  constructor() { }

  ngOnInit() {}

}

