import { Injectable, Injector } from '@angular/core';
import {Http,
		Response,
		Headers,
		Request,
		RequestOptionsArgs,
		RequestOptions,
		RequestMethod,
		URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductListingService {

	private resourceURL = "http://ec2-35-154-65-5.ap-south-1.compute.amazonaws.com:8070";
	constructor(
		private _http: Http) { }

	getSimpleProductsBy(){
		let headers = new Headers();
		return this._http
		.get(this.resourceURL+'/api/products/list',
			{ headers : headers })
		.toPromise()
		.then(res => {
			let response:any = {};
			response.data = res.json();
			response.headers = res.headers;
			response.productCount = res.headers.get("x-total-count");
  			/*console.log("header "+JSON.stringify(res.headers))
  			console.log("product count "+res.headers.get("x-total-count"))*/
  			return response})
		.catch(err => console.log("get product list service error "+err))
	}

	getProductsByfilter() {
		return this._http
		.get(this.resourceURL
			+'/api/products/userfilter?filtervalue=prodclass~FRUVEG~eq;&querycond=and&crossFilter=filter')
		.toPromise()
		.then(response => response.json())
		.catch(err => console.log("get product list service error "+err))
	}

	getProductsByFilterPaging(
		filterValue:any,
		crossFilter:any,
		mainFilter:any,
		queryCond:any,
		pageSize:number,
		currPage: number
		) {
			console.log("filtervalue "+filterValue)
			//console.log("pageSize "+pageSize+" currpage "+currPage)
		return this._http ///api/products/userfilter?filtervalue=prodclass~FRUVEG~eq;&querycond=and&crossFilter=filter&page=1&size=12&type=simple
		.get(this.resourceURL+"/api/products/userfilter?"
			+"filtervalue="+filterValue+"&"
			+"crossFilter="+crossFilter+"&"
			+"mainfilter="+mainFilter+"&"
			+"querycond="+queryCond+"&"
			+"page="+currPage+"&"
			+"size="+pageSize+"&"
			+"type=simple")
			/*.get(this.resourceURL+'/api/products/list?'
				+"page="+currPage+"&"
			+"size="+pageSize+"&"
			+"type=simple")*/
		.toPromise()
		.then(res =>{
			let response:any = {};
			response.data = res.json();
			response.headers = res.headers;
			response.productCount = res.headers.get("x-total-count");
			response.currPage = currPage;
  			/*console.log("data "+JSON.stringify(response.data))*/
  			//console.log("response currPage "+response.currPage)
  			//console.log("product count "+res.headers.get("x-total-count"))
  			return response})
		.catch(err => console.log("get product list service error "+err))
	}

}
