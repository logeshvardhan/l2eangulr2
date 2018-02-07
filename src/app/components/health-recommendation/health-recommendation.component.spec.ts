import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthRecommendationComponent } from './health-recommendation.component';

describe('HealthRecommendationComponent', () => {
  let component: HealthRecommendationComponent;
  let fixture: ComponentFixture<HealthRecommendationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthRecommendationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
