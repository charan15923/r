import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalAdsComponent } from './global-ads.component';

describe('GlobalAdsComponent', () => {
  let component: GlobalAdsComponent;
  let fixture: ComponentFixture<GlobalAdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalAdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
