import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolSpotComponent } from './cool-spot.component';

describe('CoolSpotComponent', () => {
  let component: CoolSpotComponent;
  let fixture: ComponentFixture<CoolSpotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoolSpotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoolSpotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
