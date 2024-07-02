import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  let token = localStorage.getItem('jwt_token');

  //TODO:Token exp süresi kontrol edilecek
  if (token)
    return true;

  let router = inject(Router);
  router.navigateByUrl('/');

  return false;
};