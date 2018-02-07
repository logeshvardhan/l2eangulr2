import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { DietRoutingModule } from './components/diet-recommendation/diet-routing.module';

import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { HealthRecommendationComponent } from './components/health-recommendation/health-recommendation.component';

import { ProductListingComponent } from './components/product-listing/product-listing.component';

const appRoutes: Routes = [
	{ 
		path: '', 
		redirectTo: '/home', 
		pathMatch: 'full' 
	},
	{
		path:'home', 
		component: HomeComponent
	},
	{
		path:'categories', 
		component: CategoriesComponent
	},	
	{
		path:'health-recommendation', 
		component: HealthRecommendationComponent
	}

];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
