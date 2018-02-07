import { Injectable } from '@angular/core';

@Injectable()
export class DietRecommendationService {

	childTitle:any;
	constructor() { }
	private _dietState : string;
	public getDietState() : string {
		return this._dietState;
	}
	public setDietState(v : string) {
		this._dietState = v;
	}

}
