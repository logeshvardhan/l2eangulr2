import { Component, OnInit } from '@angular/core';
import { ProductListingService } from '../../services/product-listing-service/product-listing.service';
import { AppComponent } from '../../app.component';
import {PaginatePipe, PaginationService} from 'ng2-pagination';
import { Router, ActivatedRoute, Params }  from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { PagerService } from '../../services/paging/pager.service'

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css',
  '../../app.component.css']
})
export class ProductListingComponentBakup implements OnInit {

	config: any;
	products: any = [];
	imagePath:string;
	headers: any;
	totelProduct: number;
	pageSize:any;
	pages = [];
	pageCount = 0;
	pageSlice:any;
	currPageNumber:number = 1;
	sliceStart:number;
	sliceEnd:number;
	toSlice:number = 0;
  paramsData:any;
  // pager object
  pager: any = {};
	private _page: number = 1;
    private _total: number;
  constructor(
  	private _prodListService :ProductListingService,
  	private _appComp: AppComponent,
  	private _route: Router,
    private _actdRoute: ActivatedRoute,
    private _pagerService: PagerService) { }

  ngOnInit() {
  	this.config = this._appComp.appData;
  	this.imagePath = this._appComp.appData.imagesproductpath;
  	this.pageSize = this.config.common_pagesize;//get total prod per page
  	this.pageSlice = this.config.max_slice; //get total pages to show
  	this.sliceStart = 0;
  	this.sliceEnd = this.sliceEnd==null?this.pageSlice:this.sliceEnd;
    //this._route.navigate(['/list', this.currPageNumber, this.pageSize])
    this._actdRoute.params
    .switchMap((params:Params) => this.paramsData)
      /*.subscribe(data =>  
        this.paramsData = data)
        this.pageSize = this.paramsData['pgSize'];
        this.currPageNumber = Number.parseInt(this.paramsData['pgNum']);*/
  	console.log("page size "+this.pageSize)
    console.log("currPageNumber "+this.currPageNumber)
    this.getPage(this.currPageNumber);

    //this._route.
	/*console.log("service data "+this._prodListService.getSimpleProductsBy()
		.then(data =>  console.log("data "+JSON.stringify(data))))*/
	/*this._prodListService.getProductsByfilter()
		.then(response => {
			this.products = response;
			this.headers = response.headers;
			console.log("products "+this.products)
			this.productCount = response.productCount;
			this.pageCount = Math.ceil(+this.productCount /+this.pageSize);
			this.sliceStart = 0;
			this.currPageNumber = 1;
			//console.log("test "+Math.ceil(this.pageCount/this.pageSlice))
			console.log("page Count "+this.pageCount)
			console.log("page Slice "+this.pageSlice)

			for (var i = 0; i < this.pageCount; i++) {
				this.pages[i] = i+1;						
			}			
			this.pages = this.pages.slice(+this.sliceStart, this.pageSlice);
			
		})	*/
  }

  getPage(currPage: number){
  	console.log("current page event "+currPage)
  	this.currPageNumber = currPage;
  	this._page = currPage -1;
  	console.log("_page "+this._page)
  	this._prodListService.getProductsByFilterPaging(
  		this.pageSize,
  		this._page
  		).then(response => {
			this.products = (response.data);
			this.headers = response.headers;
			this.totelProduct = response.productCount;
			this.pageCount = Math.ceil(+this.totelProduct /+this.pageSize);
			
			this.currPageNumber = currPage;
			//console.log("test "+Math.ceil(this.pageCount/this.pageSlice))
			
			/*for (var i = 0; i < this.pageCount; i++) {
				this.pages[i] = i+1;						
			}
      this.pages = this.pages.slice(this.sliceStart, this.pageSlice)*/

      this.pager = this._pagerService.getPager(this.pageCount, currPage);
      this._route.navigate(['/', this.pager.currentPage, this.pager.pageSize])
      console.log("------------------------")
      console.log("pager "+JSON.stringify(this.pager))
      console.log("------------------------")
      /*this.toSlice = Math.ceil(this.pageCount/this.pageSlice)
			console.log("pages "+this.pages)
			console.log("toSlice "+this.toSlice)*/
			//console.log("products "+JSON.stringify(this.products))
			//console.log("headers "+JSON.stringify(this.headers))
			//console.log("productCount "+this.totelProduct)

		})
  	
  }

  currentPage(page){
  	this.currPageNumber = page;
  	this.pageSize = this.pageSize;
  	console.log("currPageNumber "+this.currPageNumber+" pageCount "+this.pageCount)
    this._route.navigate(['/', this.currPageNumber, this.pageSize])
    //this.getPage(page);
  }
  nextProduct(){
    console.log("currPageNumber "+this.currPageNumber+" pageCount "+this.pageCount)
  	if(this.currPageNumber<this.pageCount){
  		//this.sliceStart = this.sliceStart +this.pageSlice;
  		/*console.log("currPageNumber "+this.currPageNumber+" sliceEnd "+this.sliceEnd)
  		if(this.currPageNumber<=(this.sliceEnd-1)){
  			this.sliceStart = this.sliceStart+this.pageSlice;
  			this.sliceEnd = (this.sliceStart+this.pageSlice)>this.pageCount?this.pageCount:(this.sliceStart+this.pageSlice);
			console.log("slice end "+this.sliceEnd)  			
  		}*/

  		this.currPageNumber =+this.currPageNumber+1;
  		console.log("next PageNumber "+this.currPageNumber)
  		this._route.navigate(['/list', this.currPageNumber, this.pageSize])
      //this._route.navigate(['/PaginationComponent'])
      //this.getPage(this.currPageNumber);
  	}
  }
  previousPage(){
  	if(this.currPageNumber>0){
  		this.currPageNumber -=1;
  		console.log("prev page "+this.currPageNumber)
  		this.getPage(this.currPageNumber);
  	}
  }

}
