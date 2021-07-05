import { TestBed } from '@angular/core/testing';

import { EmployeePresenterService } from './employee-presenter.service';

describe('EmployeePresenterService', () => {
  let service: EmployeePresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeePresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
