import { TestBed } from '@angular/core/testing';

import { LoggedtestGuard } from './loggedtest.guard';

describe('LoggedtestGuard', () => {
  let guard: LoggedtestGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoggedtestGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
