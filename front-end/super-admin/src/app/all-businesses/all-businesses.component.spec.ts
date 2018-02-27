import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBusinessesComponent } from './all-businesses.component';

describe('AllBusinessesComponent', () => {
  let component: AllBusinessesComponent;
  let fixture: ComponentFixture<AllBusinessesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllBusinessesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBusinessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
