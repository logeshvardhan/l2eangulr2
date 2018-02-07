import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DietRecommendationComponent } from '../diet-recommendation.component';

import { AppComponent } from '../../../app.component';
import { navConfig } from '../../../config/navbar-config';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css',
    '../../../app.component.css'],
  providers: [DietRecommendationComponent]
})
export class GoalsComponent implements OnInit {

  /*@Input() parentData;
  @Input() childData:any;
  medicalData: any[];*/

  config: any;
  condition: any;
  subMenuContent: any;
  resourceUrl: any;
  filterBy: any;
  constructor(
    private _dietComp: DietRecommendationComponent,
    private _route: Router,
    private _actRoute: ActivatedRoute,
    private _appComp: AppComponent) {
    this._actRoute.params.subscribe(data => this.condition = data)
    this.config = navConfig;
    this.subMenuContent = this.config.Diet_Reco;
    this.resourceUrl = this._route.url.split("/");
    this.filterBy = this.resourceUrl[this.resourceUrl.length - 1];

    // this._actRoute.params.subscribe(data => this.condition = data)
    // this._configService.getConfigJsonData()
    //  .then(data => {
    //    this.config = data;
    //    this.subMenuContent = this.config.Diet_Reco;
    //  })
    /*this.medicalData = this._dietComp.childData;
    console.log("medical data "+this.medicalData) */
  }

  ngOnInit() {
    this.config = this._appComp.appData;
  }

}
