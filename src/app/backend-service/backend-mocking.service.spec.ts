import { TestBed, inject } from '@angular/core/testing';

import { BackendMockingService } from './backend-mocking.service';

describe('BackendMockingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BackendMockingService]
    });
  });

  it('should be created', inject([BackendMockingService], (service: BackendMockingService) => {
    expect(service).toBeTruthy();
  }));
});
