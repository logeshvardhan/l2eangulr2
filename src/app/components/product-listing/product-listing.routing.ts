import { RouterModule, Routes }  from '@angular/router';
import { NgModule }              from '@angular/core';

import { ProductListingComponent } from './product-listing.component'

const appRoutes: Routes = [
		/*{
			path:'list',
			component: ProductListingComponent,
		},*/
	{
		path:'list/:fltrVal/:crossFlt/:mainFlt/:qryCond/:pgNum', 
		component: ProductListingComponent,
	}

];
@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class ProductListingRoutingModule {}
