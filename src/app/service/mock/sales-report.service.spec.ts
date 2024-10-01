import { TestBed } from '@angular/core/testing';

import { SalesReportService } from './sales-report.service';

describe('SalesReportService', () => {
  let service: SalesReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalesReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
