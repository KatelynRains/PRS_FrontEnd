import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/core/system.service';
import { Menu } from '../menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  username = this.syssvc.loggedInUser == null ? "?" : this.syssvc.loggedInUser.username;

  menus: Menu[] = [
    new Menu("Home", "home"),
    new Menu("Users", "/user/list"),
    new Menu("Vendors", "/vendor/list"),
    new Menu("Products", "/product/list"),
    new Menu("Requests", "/request/list"),
    new Menu("Reviews", "/review"),
    new Menu("Login", "/login"),
    new Menu("About", "/about")   
  ];

  
  constructor(private syssvc: SystemService ) { }

  ngOnInit(): void {
  }

}
