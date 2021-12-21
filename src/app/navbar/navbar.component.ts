import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { TokenServiceService } from '../token-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  
})
export class NavbarComponent implements OnInit {
 
  currentUser: null;
  constructor(private router : Router,private accountService : AccountService, private tokenService : TokenServiceService) { }

  ngOnInit(): void {
    
    this.accountService.authStatus.subscribe(res =>{
      this.currentUser=this.tokenService.getInfos();
    })
  }
  logout(){
    this.tokenService.remove();
    this.accountService.changeStatus(false);
    this.router.navigateByUrl("/security")
  }

}
