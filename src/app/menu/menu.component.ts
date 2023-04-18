import { Component, OnInit } from '@angular/core';
import { MenuItem } from './menuItem';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {


  menuItems: MenuItem[] = [
    {
      label: 'Home',
      icon: 'login',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true,
      menuMobi:false

    },
    {
      label: 'About',
      icon: 'help',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true,
      menuMobi:false

    },
    {
      label: 'Skills',
      icon: 'attach_money',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true,
      menuMobi:false

    },
    {
      label: 'Portfolio',
      icon: 'notes',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true,
      menuMobi:false

    },
    {
      label: 'Contact',
      icon: 'slideshow',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true,
      menuMobi:false

    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
