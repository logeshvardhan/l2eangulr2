import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../../app.component';
import { NutrientsService } from '../../../services/nutrients-service/nutrients.service';

@Component({
  selector: 'app-minerals',
  templateUrl: './minerals.component.html',
  styleUrls: ['./minerals.component.css',
  '../../../app.component.css']
})
export class MineralsComponent implements OnInit {

  config: string;
  currentroute: any; 
  resourceUrl:any[];
  subMenuContent: any;
  filterByCondition: string;
  constructor(private _appComp: AppComponent,
    private _nutriService: NutrientsService) { }

  ngOnInit() {
    this._nutriService.queryNutrients()
         .subscribe(data => this.subMenuContent = data.nutritionData);    
    this.filterByCondition = "Minerals"; 
    this.config = this._appComp.appData;
  }

}
