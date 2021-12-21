import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';
import { JwtClientService } from '../jwt-client.service';
import { TokenServiceService } from '../token-service.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

  constructor(private jwtClientService:JwtClientService,
              private tokenServiceService:TokenServiceService,
              private router :Router,
              private accountService : AccountService) { }

  loginForm = new FormGroup({
    email: new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.minLength(8),Validators.maxLength(8)])
  })

  get f()
{
    return this.loginForm;
}


  

  ngOnInit(): void {
  }
  

  login(){
    this.jwtClientService.login(this.loginForm.value).subscribe(res=>this.handleResponse(res))
}
handleResponse(res:any){
  this.tokenServiceService.handle(res);
  this.accountService.changeStatus(true);
  this.router.navigateByUrl("/Microservices")
}
}
