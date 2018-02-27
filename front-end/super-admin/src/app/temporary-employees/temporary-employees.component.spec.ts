import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemporaryEmployeesComponent } from './temporary-employees.component';

describe('TemporaryEmployeesComponent', () => {
  let component: TemporaryEmployeesComponent;
  let fixture: ComponentFixture<TemporaryEmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemporaryEmployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemporaryEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
