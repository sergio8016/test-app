import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authenticatedGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  return auth.isAuthenticated ? true : inject(Router).createUrlTree(['/login']);
};

export const adminGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  return auth.role === 'admin' ? true : inject(Router).createUrlTree(['/dashboard']);
};

export const workerGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  return auth.role === 'worker' ? true : inject(Router).createUrlTree(['/dashboard']);
};
