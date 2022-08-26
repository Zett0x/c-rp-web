import { Component, Input, OnInit } from '@angular/core';

import { NavbarItem } from './interfaces/navbarItem.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  @Input() navBrand:string='';
  @Input() navItems:NavbarItem[] = [];
  constructor() {

   }

  ngOnInit(): void {
  }



}
