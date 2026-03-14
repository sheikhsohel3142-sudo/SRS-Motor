import { CanActivateChildFn } from '@angular/router';

export const authGuardServiceGuard: CanActivateChildFn = (childRoute, state) => {
  return true;
};
