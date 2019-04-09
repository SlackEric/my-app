import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { LoginSingleton } from './login-singleton.service';
import { Observable } from 'rxjs';
import { GenericJwtToken } from '../services/mvc-api/datatypes/VsExample.AspAPI.Dtos.GenericJwtToken';

@Injectable({
  providedIn: 'root'
})
export class RouterGuardBase implements CanActivate {
  constructor(public login: LoginSingleton, public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
   
    if(this.login.token) {
        let canAccess = this.check(this.login.token);

        if(!canAccess) {
          console.log('navigate to login:', route.pathFromRoot);
          this.login.targetUrl = route.pathFromRoot.filter(p => p.routeConfig).map(p => p.url);
        }
    }


    return canAccess;
  }

   check = (token:GenericJwtToken) => false;
}
