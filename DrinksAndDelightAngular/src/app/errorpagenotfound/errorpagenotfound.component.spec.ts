import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorpagenotfoundComponent } from './errorpagenotfound.component';

describe('ErrorpagenotfoundComponent', () => {
  let component: ErrorpagenotfoundComponent;
  let fixture: ComponentFixture<ErrorpagenotfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorpagenotfoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorpagenotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
