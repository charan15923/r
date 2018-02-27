import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonCommercialSellComponent } from './non-commercial-sell.component';

describe('NonCommercialSellComponent', () => {
  let component: NonCommercialSellComponent;
  let fixture: ComponentFixture<NonCommercialSellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonCommercialSellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonCommercialSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
