import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaurantorDetailsComponent } from './gaurantor-details.component';

describe('GaurantorDetailsComponent', () => {
  let component: GaurantorDetailsComponent;
  let fixture: ComponentFixture<GaurantorDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaurantorDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaurantorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
