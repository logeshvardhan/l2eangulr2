import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { navConfig } from './config/navbar-config';
import { NutrientsService } from './services/nutrients-service/nutrients.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public appData: any;
  public nutriData: any;
  public configData: any;
  title = 'Welcome to like2eat!';
  constructor(
    private _route: Router,
    private _nutriService: NutrientsService) {
    this.appData = navConfig;

    this._nutriService.queryNutrients()
      .subscribe(data => this.nutriData = data.nutritionData)

  }


}
