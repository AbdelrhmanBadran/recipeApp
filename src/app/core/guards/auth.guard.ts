import {  inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateFn, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';


export const auth : CanActivateFn =  (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree  =>{

    const auth = inject(AuthService)
    const router = inject(Router)
    if (auth.userData.getValue() !== null) {
      return true
    }else{
      router.navigate(['/landing'])
      return false
    }
  }


