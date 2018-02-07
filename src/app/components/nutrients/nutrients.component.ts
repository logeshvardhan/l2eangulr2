import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';
import { NutrientsService } from '../../services/nutrients-service/nutrients.service'
import { NutritionData } from '../nutrients/nutrition-data';
import { NutrientFilterPipe } from './NutrientFilterPipe';
import { Pipe, PipeTransform } from '@angular/core';
import { navConfig } from '../../config/navbar-config';

@Component({
  selector: 'app-nutrients',
  templateUrl: './nutrients.component.html',
  styleUrls: ['./nutrients.component.css',
    '../../app.component.css']
})
export class NutrientsComponent implements OnInit {
  config: any;
  title: string;
  nutriSubMenu: any;
  nutriSubMenuContent: any;
  currentroute: any;
  resourceUrl: any;
  filterBy: any;
  public nutriData: {};
  constructor(
    private _appComp: AppComponent,
    private _route: Router,
    private _nutriService: NutrientsService) {
    this.currentroute = this._route.url;
    //console.log("config data "+this._configService.getData())
    //console.log("nutri Service test"+JSON.stringify(_nutriService.test()))
  }

  getNutrients(): void {
    //this.heroService.getHeroes().then(heroes=> this.heroes=heroes);

    /*this._nutriService.queryNutrients()
         .subscribe(data => this.nutriData = data)*/
  }

  ngOnInit() {
    //this.getNutrients();
    this.config = navConfig;
    this.nutriSubMenu = this.config.main_menu[2];
    this.nutriSubMenuContent = this.config.Nutri_Categories;
    this.resourceUrl = this._route.url.split("/");
    this.filterBy = this.resourceUrl[this.resourceUrl.length - 1];
    //console.log("filter by "+this.filterBy)
    this._nutriService.setNutrients(this.filterBy);
    //console.log("nutrients value "+this._nutriService.getNutrients())

    //console.log("nutri Service "+(this._nutriService.queryNutrients()))
    /*this._nutriService.queryNutrients()
      .then(nutriData => console.log("nutri data "+nutriData))*/
    /*this._nutriService.queryNutrients()
    .then((result)=> this.nutriData = (result.nutritionData))
    .catch((error)=> console.log(error))*/
    //console.log("nutri Service "+this._nutriService.queryNutrients())

  }
  selectedTab(data) {
    this.filterBy = data.toState;
    this.title = data.name;
    this._nutriService.setNutrients(data.toState);
  }

}
