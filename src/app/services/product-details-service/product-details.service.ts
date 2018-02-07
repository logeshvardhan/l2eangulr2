import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { config } from '../../config/config';

@Injectable()
export class ProductDetailsService {
  constructor(
    private _http: Http,
  ) { }

  getProductDetails(prodId: string) {
    console.log("app comp")
    return this._http
      .get(config.REST_SERVICE_URL + "/api/products/" + prodId)
      .toPromise()
      .then(res => {
        let response: any = {};
        response.data = res.json();
        response.headers = res.headers;
        return response;
      })
      .catch(err => console.log("get product list service error " + err))
  }
}
