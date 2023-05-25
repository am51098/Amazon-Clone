import { TestBed } from '@angular/core/testing';

import { IsValidGuard } from './is-valid.guard';

describe('IsValidGuard', () => {
  let guard: IsValidGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsValidGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
