import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatBannerImgComponent } from './cat-banner-img.component';

describe('CatBannerImgComponent', () => {
  let component: CatBannerImgComponent;
  let fixture: ComponentFixture<CatBannerImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatBannerImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatBannerImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
