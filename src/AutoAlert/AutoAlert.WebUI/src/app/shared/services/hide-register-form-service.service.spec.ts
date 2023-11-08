import { TestBed } from '@angular/core/testing';

import { HideRegisterFormServiceService } from './hide-register-form-service.service';

describe('HideRegisterFormServiceService', () => {
  let service: HideRegisterFormServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HideRegisterFormServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
