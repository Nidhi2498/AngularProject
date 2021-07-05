import { TestBed } from '@angular/core/testing';

import { BankdetailserviceService } from './bankdetailservice.service';

describe('BankdetailserviceService', () => {
  let service: BankdetailserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankdetailserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
