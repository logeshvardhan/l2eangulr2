import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DietFilterPipe } from './DietFilterPipe';
import { Pipe, PipeTransform } from '@angular/core';
import { Location } from '@angular/common';
import { AppComponent } from '../../app.component';
import { DietRecommendationService }
  from '../../services/diet-recommended-service/diet-recommendation.service'
import { navConfig } from '../../config/navbar-config';

@Component({
  selector: 'app-diet-recommendation',
  templateUrl: './diet-recommendation.component.html',
  styleUrls: ['./diet-recommendation.component.css',
    '../../app.component.css'],
  //providers:[DietRecommendationService]
})
export class DietRecommendationComponent implements OnInit {
  @Input() search;
  title: string;
  //filter: string;
  config: any;
  subMenu: any;
  subMenuContent: any;
  currentroute: any;
  datas: any[];
  public childData;
  resourceUrl: any;
  filterBy: any;
  imageTab: boolean = true;
  childTitle: string;
  testName: any;
  constructor(
    private _route: Router,
    private _appComp: AppComponent,
    private location: Location,
    private _dietService: DietRecommendationService) {
    this.currentroute = this._route.url;
    this.resourceUrl = this._route.url.split("/");
    this.filterBy = this.resourceUrl[this.resourceUrl.length - 1];
    this.testName = this._route;
    //this.location.path.name.split

    console.log("filter by " + this.filterBy)
    this.config = navConfig;
    this.subMenu = this.config.main_menu[1];
    this.subMenuContent = this.config.Diet_Reco;
    this.title = this.subMenuContent[0].Type_Name;
    //this.resourceUrl = this._route.url.split("/");
    //this.filterBy = this.resourceUrl[this.resourceUrl.length-1];
    // this._configService.getJsonData()
    //  .subscribe(data => {
    //    this.config = data;
    //    //this.config = this._appComp.appData;
    //    this.subMenu = this.config.main_menu[1];
    //    this.subMenuContent = this.config.Diet_Reco;
    //    this.title = this.subMenuContent[0].Type_Name;
    //    console.log("subscribe "+data)
    //  })
    //  this._configService.getConfigJsonData()
    //   .then(data => {
    //     this.config = data;
    //     //this.config = this._appComp.appData;
    //     this.subMenu = this.config.main_menu[1];
    //     this.subMenuContent = this.config.Diet_Reco;
    //     this.title = this.subMenuContent[0].Type_Name;
    //     //console.log("promise "+data)
    //   })
    //console.log("service data "+this._configService.getConfigJsonData().then(data => this.config = data))


    //console.log("filter by parent "+this.filterBy)
    /*this.childTitle = this._dietService.childTitle;
    console.log("child title in parent "+this.childTitle)*/
    /*this._dietService.setDietState(this.filterBy)
    console.log("diet service cons "+this._dietService.getDietState())*/
    /* console.log("location Cons"+this.location.path())*/
  }

  ngOnInit() {
    //console.log("current link :"+JSON.stringify(this._route.url))
    //console.log("DietRecommendationComponent :"+this._appComp.appData)
    //this.subMenu = this.config.main_menu[1];
    //console.log('DietRecommendationComponent: '+ JSON.stringify(this.subMenu));
  }

  selectedTab(data) {
    //console.log("diet service click: "+this._dietService.getDietState())
    this._dietService.childTitle = data.Type_Name;
    this.filterBy = data.toState;
    //console.log("currentroute"+this.currentroute)
    this.title = data.Type_Name;
    //console.log(JSON.stringify(this.title))
  }


}
