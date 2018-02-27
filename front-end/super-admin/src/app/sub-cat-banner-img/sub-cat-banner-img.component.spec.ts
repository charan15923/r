import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCatBannerImgComponent } from './sub-cat-banner-img.component';

describe('SubCatBannerImgComponent', () => {
  let component: SubCatBannerImgComponent;
  let fixture: ComponentFixture<SubCatBannerImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubCatBannerImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCatBannerImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
