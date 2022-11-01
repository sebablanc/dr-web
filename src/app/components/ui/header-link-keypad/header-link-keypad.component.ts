import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { INavItem } from '../header-link/header-link.component';

@Component({
  selector: 'app-header-link-keypad',
  templateUrl: './header-link-keypad.component.html',
  styleUrls: ['./header-link-keypad.component.scss'],
})
export class HeaderLinkKeypadComponent implements OnInit {
  @Input() headerNavItems: Array<INavItem> = [];
  @ViewChild('linkContainer') linkContainer: ElementRef;
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.showLinksContainer = window.innerWidth > 962;
  }
  showLinksContainer = false


  constructor() { }

  ngOnInit() {
    this.onResize();
  }

  ngAfterViewInit() {
  }

  showLinks() {
    this.showLinksContainer = !this.showLinksContainer;
    console.log(this.showLinksContainer);
    //this.linkContainer.nativeElement.style.display = this.showLinksContainer ? 'inline-flex' : 'block';
  }

}

