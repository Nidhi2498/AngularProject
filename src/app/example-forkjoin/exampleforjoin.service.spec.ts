import { TestBed } from '@angular/core/testing';

import { ExampleforjoinService } from './exampleforjoin.service';

describe('ExampleforjoinService', () => {
  let service: ExampleforjoinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExampleforjoinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
