import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
/*routing*/
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { DietRoutingModule } from './components/diet-recommendation/diet-routing.module';
import { NutrientRoutingModule } from './components/nutrients/nutrients-routing.module';
import { ProductListingRoutingModule } from './components/product-listing/product-listing.routing';
import { ProductDetailsRoutingModule } from './components/product-details/product-details-routing';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';

/*filter*/
import { DietFilterPipe } from './components/diet-recommendation/DietFilterPipe';
import { NutrientFilterPipe } from './components/nutrients/NutrientFilterPipe';

/*pagination*/
import { Ng2PaginationModule } from 'ng2-pagination';

/*services*/
import { NutrientsService } from './services/nutrients-service/nutrients.service';
import { DietRecommendationService } from './services/diet-recommended-service/diet-recommendation.service';
import { ProductListingService } from './services/product-listing-service/product-listing.service';
import { ProductDetailsService } from './services/product-details-service/product-details.service'
import { PagerService } from './services/paging/pager.service'

/*components*/
import { SliderComponent } from './components/slider/slider.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { DietRecommendationComponent } from './components/diet-recommendation/diet-recommendation.component';
import { NutrientsComponent } from './components/nutrients/nutrients.component';
import { HealthRecommendationComponent } from './components/health-recommendation/health-recommendation.component';
import { MedicalCondComponent } from './components/diet-recommendation/medical-cond/medical-cond.component';
import { AgeAndGenderComponent } from './components/diet-recommendation/age-and-gender/age-and-gender.component';
import { GoalsComponent } from './components/diet-recommendation/goals/goals.component';
import { NatureOfWorkComponent } from './components/diet-recommendation/nature-of-work/nature-of-work.component';
import { ErrorComponent } from './components/error/error.component';
import { CarbohydratesComponent } from './components/nutrients/carbohydrates/carbohydrates.component';
import { FatsComponent } from './components/nutrients/fats/fats.component';
import { ProteinsComponent } from './components/nutrients/proteins/proteins.component';
import { VitaminsComponent } from './components/nutrients/vitamins/vitamins.component';
import { MineralsComponent } from './components/nutrients/minerals/minerals.component';
import { ProductListingComponent } from './components/product-listing/product-listing.component';
import { ProductFilterComponent } from './components/product-filter/product-filter.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SliderComponent,
    CategoriesComponent,
    DietRecommendationComponent,
    NutrientsComponent,
    HealthRecommendationComponent,
    MedicalCondComponent,
    AgeAndGenderComponent,
    GoalsComponent,
    NatureOfWorkComponent,
    DietFilterPipe,
    NutrientFilterPipe,
    ErrorComponent,
    CarbohydratesComponent,
    FatsComponent,
    ProteinsComponent,
    VitaminsComponent,
    MineralsComponent,
    ProductListingComponent,
    ProductFilterComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgbModule,
    RouterModule,
    DietRoutingModule,
    NutrientRoutingModule,
    ProductListingRoutingModule,
    ProductDetailsRoutingModule,
    Ng2PaginationModule,
    CarouselModule.forRoot()
  ],
  providers: [
    NutrientsService,
    DietRecommendationService,
    ProductListingService,
    ProductDetailsService,
    PagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
