import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServicesToBusinessComponent } from './add-services-to-business.component';

describe('AddServicesToBusinessComponent', () => {
  let component: AddServicesToBusinessComponent;
  let fixture: ComponentFixture<AddServicesToBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddServicesToBusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddServicesToBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
