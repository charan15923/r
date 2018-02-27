import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallCenterEmployeesComponent } from './call-center-employees.component';

describe('CallCenterEmployeesComponent', () => {
  let component: CallCenterEmployeesComponent;
  let fixture: ComponentFixture<CallCenterEmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallCenterEmployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallCenterEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
