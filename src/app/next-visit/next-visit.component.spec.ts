import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextVisitComponent } from './next-visit.component';

describe('NextVisitComponent', () => {
  let component: NextVisitComponent;
  let fixture: ComponentFixture<NextVisitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextVisitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
