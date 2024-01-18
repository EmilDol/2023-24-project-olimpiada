import { TestBed } from '@angular/core/testing';

import { GetAllCarsService } from './get-all-cars.service';

describe('GetAllCarsService', () => {
  let service: GetAllCarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllCarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
