import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeAndGenderComponent } from './age-and-gender.component';

describe('AgeAndGenderComponent', () => {
  let component: AgeAndGenderComponent;
  let fixture: ComponentFixture<AgeAndGenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgeAndGenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgeAndGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
