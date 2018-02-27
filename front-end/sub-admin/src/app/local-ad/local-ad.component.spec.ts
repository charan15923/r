import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalAdComponent } from './local-ad.component';

describe('LocalAdComponent', () => {
  let component: LocalAdComponent;
  let fixture: ComponentFixture<LocalAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
