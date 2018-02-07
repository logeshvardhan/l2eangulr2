import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DietRecommendationComponent } from './diet-recommendation.component';

describe('DietRecommendationComponent', () => {
  let component: DietRecommendationComponent;
  let fixture: ComponentFixture<DietRecommendationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DietRecommendationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DietRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
