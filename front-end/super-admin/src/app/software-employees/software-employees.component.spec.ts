import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareEmployeesComponent } from './software-employees.component';

describe('SoftwareEmployeesComponent', () => {
  let component: SoftwareEmployeesComponent;
  let fixture: ComponentFixture<SoftwareEmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftwareEmployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
