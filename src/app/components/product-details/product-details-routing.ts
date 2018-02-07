import { RouterModule, Routes }  from '@angular/router';
import { NgModule }              from '@angular/core';

import { ProductDetailsComponent } from './product-details.component'

const appRoutes: Routes = [
		/*{
			path:'list',
			component: ProductListingComponent,
		},*/
	{
		path:'details/:productId',
		component: ProductDetailsComponent,
	}

];
@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})

export class ProductDetailsRoutingModule {
}
