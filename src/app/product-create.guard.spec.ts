import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { productCreateGuard } from './product-create.guard';

describe('productCreateGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => productCreateGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
