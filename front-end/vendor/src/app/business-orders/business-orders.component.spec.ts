import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessOrdersComponent } from './business-orders.component';

describe('BusinessOrdersComponent', () => {
  let component: BusinessOrdersComponent;
  let fixture: ComponentFixture<BusinessOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
