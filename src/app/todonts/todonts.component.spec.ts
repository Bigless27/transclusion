import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodontsComponent } from './todonts.component';

describe('TodontsComponent', () => {
  let component: TodontsComponent;
  let fixture: ComponentFixture<TodontsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodontsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodontsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
