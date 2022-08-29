import { Component, OnInit } from '@angular/core';
import { NavbarItem } from 'src/app/pages/home/components/navbar/interfaces/navbarItem.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  navItems:NavbarItem[]=[
    {
      item:'home',
      route:'/'
    },
    {
      item:'noticias',
      route:'#news'
    },
    {
      item:'foro',
      route:'/foro'
    },
    {
      item:'tienda',
      route:'/tienda'
    }



  ]

  constructor() { }

  ngOnInit(): void {
  }

}
