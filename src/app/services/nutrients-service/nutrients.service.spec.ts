import { TestBed, inject } from '@angular/core/testing';

import { NutrientsService } from './nutrients.service';

describe('NutrientsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NutrientsService]
    });
  });

  it('should ...', inject([NutrientsService], (service: NutrientsService) => {
    expect(service).toBeTruthy();
  }));
});
