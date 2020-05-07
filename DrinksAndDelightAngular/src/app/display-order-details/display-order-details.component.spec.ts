import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayOrderDetailsComponent } from './display-order-details.component';

describe('DisplayOrderDetailsComponent', () => {
  let component: DisplayOrderDetailsComponent;
  let fixture: ComponentFixture<DisplayOrderDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayOrderDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
