import { TestBed } from '@angular/core/testing';

import { DocumentdetailscommonServiceService } from './documentdetailscommon-service.service';

describe('DocumentdetailscommonServiceService', () => {
  let service: DocumentdetailscommonServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentdetailscommonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
