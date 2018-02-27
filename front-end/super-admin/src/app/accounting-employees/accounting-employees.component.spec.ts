import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingEmployeesComponent } from './accounting-employees.component';

describe('AccountingEmployeesComponent', () => {
  let component: AccountingEmployeesComponent;
  let fixture: ComponentFixture<AccountingEmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountingEmployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
