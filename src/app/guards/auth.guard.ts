import { AccountService } from './../account.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenServiceService } from '../token-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router :Router,private accountService: AccountService,private tokenService :TokenServiceService){

  }
  canActivate(
   route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
     if(!this.tokenService.loggedIn()){
        this.tokenService.remove();
        this.accountService.changeStatus(false);
        this.router.navigateByUrl("/security")
        return false
      

      }

      return true;
   
  }
  
}
