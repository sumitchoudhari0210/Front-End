import { TestBed } from '@angular/core/testing';

import { GaurantorDetailsService } from './gaurantor-details.service';

describe('GaurantorDetailsService', () => {
  let service: GaurantorDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GaurantorDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
