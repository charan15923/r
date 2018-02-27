import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorPolicyComponent } from './vendor-policy.component';

describe('VendorPolicyComponent', () => {
  let component: VendorPolicyComponent;
  let fixture: ComponentFixture<VendorPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
