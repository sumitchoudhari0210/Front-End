import { TestBed } from '@angular/core/testing';

import { EnquirydetailsService } from './enquirydetails.service';

describe('EnquirydetailsService', () => {
  let service: EnquirydetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnquirydetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
