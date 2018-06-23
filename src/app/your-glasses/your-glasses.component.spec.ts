import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourGlassesComponent } from './your-glasses.component';

describe('YourGlassesComponent', () => {
  let component: YourGlassesComponent;
  let fixture: ComponentFixture<YourGlassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourGlassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourGlassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
