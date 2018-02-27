import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalAdsComponent } from './local-ads.component';

describe('LocalAdsComponent', () => {
  let component: LocalAdsComponent;
  let fixture: ComponentFixture<LocalAdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalAdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
