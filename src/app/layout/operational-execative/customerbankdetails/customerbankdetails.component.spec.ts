import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerbankdetailsComponent } from './customerbankdetails.component';

describe('CustomerbankdetailsComponent', () => {
  let component: CustomerbankdetailsComponent;
  let fixture: ComponentFixture<CustomerbankdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerbankdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerbankdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
