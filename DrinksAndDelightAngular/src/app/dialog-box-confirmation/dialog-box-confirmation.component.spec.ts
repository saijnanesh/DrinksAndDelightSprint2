import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBoxConfirmationComponent } from './dialog-box-confirmation.component';

describe('DialogBoxConfirmationComponent', () => {
  let component: DialogBoxConfirmationComponent;
  let fixture: ComponentFixture<DialogBoxConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogBoxConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogBoxConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
