import { TestBed } from '@angular/core/testing';

import { RentACarService } from './rent-acar.service';

describe('RentACarService', () => {
  let service: RentACarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentACarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
