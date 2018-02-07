import { Component, OnInit } from '@angular/core';
//import { FilterPipe } from '../diet-recommendation/FilterPipe';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-health-recommendation',
  templateUrl: './health-recommendation.component.html',
  styleUrls: ['./health-recommendation.component.css',
  '../../app.component.css']
})
export class HealthRecommendationComponent implements OnInit {
	datas: any[];
	config: any;
	subMenu: any;
  constructor(
  	private _appComp: AppComponent) { 
  	this.datas = [ 'apple', 'banana', 'carrot', 
  					'pear', 'peach', 'orange',
  					'mango', 'grapes', 'lime', 
  					'lemon' ];
}

  ngOnInit() {
  	this.config = this._appComp.appData;
  	this.subMenu = this.config.main_menu[3];
  }

}
