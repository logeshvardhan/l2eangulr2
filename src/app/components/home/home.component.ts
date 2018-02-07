import { Component, OnInit } from '@angular/core';
import { navConfig } from '../../config/navbar-config';
import { AppComponent } from '../../app.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css',
    '../../app.component.css']
})
export class HomeComponent implements OnInit {
  config: any;
  imagePath: string;
  constructor(
    private _appComp: AppComponent) { this.config = navConfig }

  ngOnInit() {
    //this.config = this._appComponent.appData;
    //console.log("home "+this.config)

    //console.log('home: '+ this._configService.getData());
  }

}
