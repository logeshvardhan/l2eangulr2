import { RouterModule, Routes }  from '@angular/router';
import { NgModule }              from '@angular/core';

import { NutrientsComponent } from './nutrients.component'
import { CarbohydratesComponent } from './carbohydrates/carbohydrates.component'
import { FatsComponent } from './fats/fats.component'
import { MineralsComponent } from './minerals/minerals.component'
import { ProteinsComponent } from './proteins/proteins.component'
import { VitaminsComponent } from './vitamins/vitamins.component'

const appRoutes: Routes = [
	{
		path:'nutrients', 
		component: NutrientsComponent,
		children:[
			{ 
				path: '', 
				redirectTo: 'carbohydrates', 
				pathMatch: 'full'
			},
			{
				path:'carbohydrates', 
				component: CarbohydratesComponent,
			},
			{
				path:'fats', 
				component: FatsComponent,
			},
			{
				path:'minerals', 
				component: MineralsComponent,
			},
			{
				path:'proteins', 
				component: ProteinsComponent,
			},
			{
				path:'vitamins', 
				component: VitaminsComponent,
			},
		]
	}

];
@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class NutrientRoutingModule {}