import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductsToBusinessComponent } from './add-products-to-business.component';

describe('AddProductsToBusinessComponent', () => {
  let component: AddProductsToBusinessComponent;
  let fixture: ComponentFixture<AddProductsToBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductsToBusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductsToBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
