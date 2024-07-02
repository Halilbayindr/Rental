import { TestBed } from '@angular/core/testing';

import { RegisterServiService } from './register-servi.service';

describe('RegisterServiService', () => {
  let service: RegisterServiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterServiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
