import { Component, OnInit } from '@angular/core';
import { navConfig } from '../../config/navbar-config';
import { AppComponent } from '../../app.component'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css',
    '../../app.component.css']
})
export class NavbarComponent implements OnInit {
  config: any;
  constructor(
    private _appComp: AppComponent) { }

  ngOnInit() {
    this.config = navConfig;
  }

}
