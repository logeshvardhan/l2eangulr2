import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalCondComponent } from './medical-cond.component';

describe('MedicalCondComponent', () => {
  let component: MedicalCondComponent;
  let fixture: ComponentFixture<MedicalCondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalCondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalCondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
