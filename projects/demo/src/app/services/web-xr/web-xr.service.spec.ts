import { TestBed } from '@angular/core/testing';

import { WebXrService } from './web-xr.service';

describe('WebXrService', () => {
  let service: WebXrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebXrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
