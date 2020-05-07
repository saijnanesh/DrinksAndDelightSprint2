import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDeleteOrderComponent } from './update-delete-order.component';

describe('UpdateDeleteOrderComponent', () => {
  let component: UpdateDeleteOrderComponent;
  let fixture: ComponentFixture<UpdateDeleteOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDeleteOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDeleteOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
