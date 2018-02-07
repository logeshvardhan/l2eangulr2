import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NatureOfWorkComponent } from './nature-of-work.component';

describe('NatureOfWorkComponent', () => {
  let component: NatureOfWorkComponent;
  let fixture: ComponentFixture<NatureOfWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NatureOfWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NatureOfWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
