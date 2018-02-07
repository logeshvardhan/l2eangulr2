import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarbohydratesComponent } from './carbohydrates.component';

describe('CarbohydratesComponent', () => {
  let component: CarbohydratesComponent;
  let fixture: ComponentFixture<CarbohydratesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarbohydratesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarbohydratesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
