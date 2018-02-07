import { RouterModule, Routes }  from '@angular/router';
import { NgModule }              from '@angular/core';

import { DietRecommendationComponent } from './diet-recommendation.component'
import { MedicalCondComponent } from './medical-cond/medical-cond.component'
import { AgeAndGenderComponent } from './age-and-gender/age-and-gender.component'
import { GoalsComponent } from './goals/goals.component'
import { NatureOfWorkComponent } from './nature-of-work/nature-of-work.component'


const appRoutes: Routes = [
	{
		path:'diet-recommendation', 
		component: DietRecommendationComponent,
		children:[
			{
				path: '',
				redirectTo: 'medical-condition',
				pathMatch: 'full'
			},
			{
				path:'medical-condition',
				component: MedicalCondComponent,
			},
			{
				path:'age-and-gender',
				component: AgeAndGenderComponent,
			},
			{
				path:'goals',
				component: GoalsComponent,
			},
			{
				path:'nature-of-work',
				component: NatureOfWorkComponent,
			}
		]
	}
];
@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class DietRoutingModule {}
