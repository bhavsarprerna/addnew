import { CanActivateFn } from '@angular/router';

export const activeGuardGuard: CanActivateFn = (route, state) => {
  return true;
};
