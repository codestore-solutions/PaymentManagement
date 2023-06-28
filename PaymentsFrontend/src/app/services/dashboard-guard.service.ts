import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DashboardGuardService implements CanActivate {
  constructor(private _router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(!localStorage.getItem('user')){
      this._router.navigate(["admin-login"]);
      return false;
    }
    return true;
  }

}
