import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBannerImgComponent } from './home-banner-img.component';

describe('HomeBannerImgComponent', () => {
  let component: HomeBannerImgComponent;
  let fixture: ComponentFixture<HomeBannerImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBannerImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBannerImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
