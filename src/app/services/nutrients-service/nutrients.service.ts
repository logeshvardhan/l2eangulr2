import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { NutritionData } from '../../components/nutrients/nutrition-data';
import { config } from '../../config/config'

@Injectable()
export class NutrientsService {

	private _nutrients: any;
	public getNutrients(): any {
		return this._nutrients;
	}
	public setNutrients(v: any) {
		this._nutrients = v;
	}

	nutrients: any;
	constructor(
		private _http: Http) {
		//this.test();
		//this.queryNutrients();  	
	}

	queryNutrients() {
		return this._http
			.get(config.REST_SERVICE_URL + "/api/products/nutrients")
			.map(data => data.json());
	}

	StrFirstLetterByCaps(input) {
		if (input !== null) {
			return input.replace(/\w\S*/g, function (txt) {
				return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
					;
			});
		}
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}
