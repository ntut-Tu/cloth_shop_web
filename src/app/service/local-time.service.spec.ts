import { TestBed } from '@angular/core/testing';

import { LocalTimeService } from './local-time.service';

describe('LocalTimeService', () => {
  let service: LocalTimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalTimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
