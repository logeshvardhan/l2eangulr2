import { TestBed, inject } from '@angular/core/testing';

import { DietRecommendationService } from './diet-recommendation.service';

describe('DietRecommendationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DietRecommendationService]
    });
  });

  it('should ...', inject([DietRecommendationService], (service: DietRecommendationService) => {
    expect(service).toBeTruthy();
  }));
});
