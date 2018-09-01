import { TestBed, inject } from '@angular/core/testing';

import { ProcessHttpResponseService } from './process-http-response.service';

describe('ProcessHttpResponseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProcessHttpResponseService]
    });
  });

  it('should be created', inject([ProcessHttpResponseService], (service: ProcessHttpResponseService) => {
    expect(service).toBeTruthy();
  }));
});
