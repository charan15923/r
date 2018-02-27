import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVendorsComponent } from './view-vendors.component';

describe('ViewVendorsComponent', () => {
  let component: ViewVendorsComponent;
  let fixture: ComponentFixture<ViewVendorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewVendorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewVendorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
