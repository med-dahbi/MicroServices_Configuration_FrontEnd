import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenServiceService } from './token-service.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
 private loggedIn= new BehaviorSubject<boolean>(this.tokenService.loggedIn());
 authStatus=this.loggedIn.asObservable();

  constructor(private tokenService: TokenServiceService) { }
  changeStatus(value :boolean){
    this.loggedIn.next(value);
  }
}
