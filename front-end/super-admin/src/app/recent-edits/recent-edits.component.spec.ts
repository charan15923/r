import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentEditsComponent } from './recent-edits.component';

describe('RecentEditsComponent', () => {
  let component: RecentEditsComponent;
  let fixture: ComponentFixture<RecentEditsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentEditsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentEditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
