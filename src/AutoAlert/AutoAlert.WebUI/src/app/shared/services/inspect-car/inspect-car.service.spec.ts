import { TestBed } from '@angular/core/testing';

import { InspectCarService } from './inspect-car.service';

describe('InspectCarService', () => {
  let service: InspectCarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InspectCarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
