import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProteinsComponent } from './proteins.component';

describe('ProteinsComponent', () => {
  let component: ProteinsComponent;
  let fixture: ComponentFixture<ProteinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProteinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProteinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
