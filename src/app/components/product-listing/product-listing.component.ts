import { Component, OnInit } from '@angular/core';
import { ProductListingService } from '../../services/product-listing-service/product-listing.service';
import { AppComponent } from '../../app.component';
import { PaginatePipe, PaginationService } from 'ng2-pagination';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { PagerService } from '../../services/paging/pager.service'
import { navConfig } from '../../config/navbar-config';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css',
    '../../app.component.css']
})
export class ProductListingComponent {

  config: any;
  products: any = [];
  imagePath: string;
  headers: any;
  totelProduct: number;
  pageSize: any;
  pages = [];
  pageCount = 0;
  pageSlice: any;
  currPageNumber: number;
  sliceStart: number;
  sliceEnd: number;
  toSlice: number = 0;
  paramsData: any;
  filterValue: any;
  crossFilter: any;
  mainFilter: any;
  queryCond: any;
  testPageNum: number;
  // pager object
  pager: any = {};
  private _page: number = 1;
  private _total: number;
  constructor(
    private _prodListService: ProductListingService,
    private _appComp: AppComponent,
    private _route: Router,
    private _actdRoute: ActivatedRoute,
    private _pagerService: PagerService) {
    this.config = navConfig;
    this.imagePath = this.config.imagesproductpath;
    this.pageSize = parseInt(this.config.common_pagesize);//get total prod per page
    this.pageSlice = parseInt(this.config.max_slice);
    this._actdRoute.params
      .subscribe(data => {
        this.filterValue = data['fltrVal'];
        this.crossFilter = data['crossFlt'];
        this.mainFilter = data['mainFlt'];
        this.queryCond = data['qryCond'];
        this.currPageNumber = parseInt(data['pgNum']);
        this.getPage(this.currPageNumber);
      })
  }

  getPage(currPage: number) {
    this.currPageNumber = currPage;
    this._page = currPage - 1;
    this._prodListService.getProductsByFilterPaging(
      this.filterValue,
      this.crossFilter,
      this.mainFilter,
      this.queryCond,
      this.pageSize,
      this._page
    ).then(response => {
      this.products = (response.data);
      this.headers = response.headers;
      this.totelProduct = response.productCount;
      this.pageCount = Math.ceil(+this.totelProduct / +this.pageSize);
      this.pager = this._pagerService.getPager(this.totelProduct, this.currPageNumber, this.pageSize);
    })

  }

}
