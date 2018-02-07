import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FatsComponent } from './fats.component';

describe('FatsComponent', () => {
  let component: FatsComponent;
  let fixture: ComponentFixture<FatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
