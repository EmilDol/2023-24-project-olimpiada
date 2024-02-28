import { TestBed } from '@angular/core/testing';

import { AddVignetteService } from './add-vignette.service';

describe('AddVignetteService', () => {
  let service: AddVignetteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddVignetteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
