import { TestBed } from '@angular/core/testing';

import { RegionDataService } from './region-data.service';

describe('RegionDataService', () => {
  let service: RegionDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegionDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
