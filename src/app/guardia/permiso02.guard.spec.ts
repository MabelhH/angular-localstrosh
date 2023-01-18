import { TestBed } from '@angular/core/testing';

import { Permiso02Guard } from './permiso02.guard';

describe('Permiso02Guard', () => {
  let guard: Permiso02Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Permiso02Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
