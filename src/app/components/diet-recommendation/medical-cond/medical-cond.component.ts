import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DietRecommendationComponent } from '../diet-recommendation.component';
import { DietRecommendationService } from '../../../services/diet-recommended-service/diet-recommendation.service';
import { AppComponent } from '../../../app.component';
import { navConfig } from '../../../config/navbar-config';

@Component({
  selector: 'app-medical-cond',
  templateUrl: './medical-cond.component.html',
  styleUrls: ['./medical-cond.component.css',
    '../../../app.component.css'],
  providers: [DietRecommendationComponent]
})
export class MedicalCondComponent implements OnInit {

  // @Input() parentData;
  // @Input() childData:any;
  // medicalData: any[];
  // filter: string;
  //type: string;
  config: any;
  condition: any;
  subMenuContent: any;
  resourceUrl: any;
  filterBy: any;
  //currentroute: any;
  //datas: any[];
  constructor(
    private _dietComp: DietRecommendationComponent,
    private _route: Router,
    private _actRoute: ActivatedRoute,
    private _appComp: AppComponent,
    private _dietService: DietRecommendationService) {
    this._actRoute.params.subscribe(data => this.condition = data)
    this.config = navConfig;
    this.subMenuContent = this.config.Diet_Reco;
    this.resourceUrl = this._route.url.split("/");
    this.filterBy = this.resourceUrl[this.resourceUrl.length - 1];

    // this._configService.getConfigJsonData()
    //  .then(data => {
    //    this.config = data;
    //    this.subMenuContent = this.config.Diet_Reco;
    //  })
    //console.log("data "+JSON.stringify(this.condition))
    //this.subMenuContent = this._dietComp.subMenuContent? this._dietComp.subMenuContent :"" ;
    //this.medicalData = this._dietComp.childData;
    //console.log("medical data "+this.medicalData)
    // setTimeout(() => {
    //   this.subMenuContent = this._dietComp.subMenuContent;
    //   console.log('hello');
    //   this.config = this._dietComp.config;
    // }, 500);
  }

  ngOnInit() {
    //this.config = this._appComp.appData;
    /*let type = this._actRoute.snapshot.params['type'];
    console.log("type "+type)*/
  }

}
