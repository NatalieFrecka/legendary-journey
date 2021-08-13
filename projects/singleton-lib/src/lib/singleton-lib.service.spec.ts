import { TestBed } from '@angular/core/testing';

import { SingletonLibService } from './singleton-lib.service';

describe('SingletonLibService', () => {
  let service: SingletonLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingletonLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
