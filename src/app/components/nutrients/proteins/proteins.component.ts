import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../../app.component';
import { NutrientsService } from '../../../services/nutrients-service/nutrients.service';

@Component({
  selector: 'app-proteins',
  templateUrl: './proteins.component.html',
  styleUrls: ['./proteins.component.css',
  '../../../app.component.css']
})
export class ProteinsComponent implements OnInit {

  config: string;
  currentroute: any; 
  resourceUrl:any[];
  subMenuContent: any;
  private filterByCondition: string;
  constructor(private _appComp: AppComponent,
    private _nutriService: NutrientsService) { }
  	

  ngOnInit() {
    this._nutriService.queryNutrients()
         .subscribe(data => this.subMenuContent = data.nutritionData);    
     this.filterByCondition = "Protein"; 
    this.config = this._appComp.appData;
  }

}
