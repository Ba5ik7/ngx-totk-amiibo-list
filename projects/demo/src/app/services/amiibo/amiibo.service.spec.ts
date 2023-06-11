import { TestBed } from '@angular/core/testing';

import { AmiiboService } from './amiibo.service';

describe('AmiiboService', () => {
  let service: AmiiboService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmiiboService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
