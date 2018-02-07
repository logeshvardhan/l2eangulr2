import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';
import { AppComponent } from '../../../app.component';
import { NutrientsComponent } from '../nutrients.component'
import { NutrientsService } from '../../../services/nutrients-service/nutrients.service';
import { NutrientFilterPipe } from '../NutrientFilterPipe';

@Component({
  selector: 'app-carbohydrates',
  templateUrl: './carbohydrates.component.html',
  styleUrls: ['./carbohydrates.component.css',
  '../../../app.component.css']
})
export class CarbohydratesComponent implements OnInit {

  config: string;
  currentroute: any;
  resourceUrl:any[];
  subMenuContent: any;
  private filterByCondition: string;
  constructor(
  	private _appComp: AppComponent,
  	 private _route: Router,
  	 private _nutriComp: NutrientsComponent,
     private _nutriService: NutrientsService) {

    //this.resourceUrl = this._route.url.split("/");
    //this.filterByCondition = this.StrFirstLetterByCaps(this.resourceUrl[this.resourceUrl.length-1]);

    //this.currentroute = _route.url;

    //this.subMenuContent = this._nutriComp.nutriData;
    //console.log("capital letter "+this.filter(this.filterByCondition))
    //console.log("filter by "+this.filterByCondition)

  	//console.log("carb currentroute "+(_route.url.split("/")))
  	/*this.resourceUrl = _route.url.split("/");
    this.filterBy = this.resourceUrl[this.resourceUrl.length-1];
    console.log("filter by "+this.filterBy)  */

  }

  ngOnInit() {
  	this._nutriService.queryNutrients()
         .subscribe(data => this.subMenuContent = data.nutritionData);
    this.filterByCondition = "Carbohydrates";
    this.config = this._appComp.appData;
  }


}
