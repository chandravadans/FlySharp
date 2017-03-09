import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightFliterComponent } from './flight-filter.component';

describe('FlightFliterComponent', () => {
  let component: FlightFliterComponent;
  let fixture: ComponentFixture<FlightFliterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightFliterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightFliterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
