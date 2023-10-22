import { CanActivateFn } from '@angular/router';

export const testGuardGuard: CanActivateFn = (route, state) => {
  
  // state.url = '/not-permitted'
  return true;
};
