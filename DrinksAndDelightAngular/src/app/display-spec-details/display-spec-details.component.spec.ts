import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySpecDetailsComponent } from './display-spec-details.component';

describe('DisplaySpecDetailsComponent', () => {
  let component: DisplaySpecDetailsComponent;
  let fixture: ComponentFixture<DisplaySpecDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaySpecDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaySpecDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
