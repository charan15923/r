import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingEmployeesComponent } from './marketing-employees.component';

describe('MarketingEmployeesComponent', () => {
  let component: MarketingEmployeesComponent;
  let fixture: ComponentFixture<MarketingEmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketingEmployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
