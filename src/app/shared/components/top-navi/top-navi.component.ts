import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-top-navi',
  templateUrl: './top-navi.component.html',
  styleUrls: ['./top-navi.component.scss']
})
export class TopNaviComponent implements OnInit {

  // Properties
  items: any[];
  activeItem: any;

  constructor() { }

  ngOnInit(): void {
    this.items = [
      { label: 'Home', routerLink: 'home', icon: 'pi pi-fw pi-home' },
      { label: 'Tontinard', routerLink: 'tontinards', icon: 'pi pi-fw pi-cog' },
      { label: 'About', routerLink: 'home', icon: 'pi pi-fw pi-eject' },
      { label: 'Contact', icon: 'pi pi-fw pi-file' },

    ];
    this.activeItem = this.items[0];

  }
}
