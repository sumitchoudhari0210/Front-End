import { TestBed } from '@angular/core/testing';

import { CustomerbankdetailsService } from './customerbankdetails.service';

describe('CustomerbankdetailsService', () => {
  let service: CustomerbankdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerbankdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
