import { TestBed } from '@angular/core/testing';

import { VehiclecommonService } from './vehiclecommon.service';

describe('VehiclecommonService', () => {
  let service: VehiclecommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehiclecommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
