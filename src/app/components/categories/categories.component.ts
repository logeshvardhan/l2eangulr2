import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css',
  '../../app.component.css']
})
export class CategoriesComponent implements OnInit {
	config: any;
	subMenu:any;
  constructor(
  	private _appComp: AppComponent) { }

  ngOnInit() {
  	this.config = this._appComp.appData;
  	this.subMenu = this.config.main_menu[0];
    //console.log('categories: '+ JSON.stringify(this.subMenu));
  }

}
