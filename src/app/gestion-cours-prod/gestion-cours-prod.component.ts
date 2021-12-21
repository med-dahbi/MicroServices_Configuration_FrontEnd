import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';
import { GestionCoursService } from '../gestion-cours.service';

@Component({
  selector: 'app-gestion-cours-prod',
  templateUrl: './gestion-cours-prod.component.html',
  styleUrls: ['./gestion-cours-prod.component.css']
})
export class GestionCoursProdComponent implements OnInit {
  PrincipalForm = new FormGroup({
    prefix : new FormControl(),
     message: new FormControl(),
     url : new FormControl(),
     nom_application: new FormControl(),
     password: new FormControl(),
     port: new FormControl(),
     config: new FormControl(),
     username: new FormControl(),
 
   })
 
  
   data:any
   Propdata :any
   x:any
   y:any
  

  constructor(private router:Router,private file :GestionCoursService,private accountService:AccountService) { 

  }
  update(){
    console.log(this.PrincipalForm.value);
    this.file.saveProduction(this.PrincipalForm.value).subscribe(
      response=>console.log('success',response),
      error=> console.error('error',error)

    ); 
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);}

  ngOnInit(): void {
    this.file.GetProdConfig().subscribe(data=>{
      console.log(data);
      this.data=data
     /*  this.Propdata =  Object.entries(data);*/
     this.x= Object.keys(data);
     this.y= Object.values(data);
     this.accountService.changeStatus(false);
     this.PrincipalForm.controls['prefix'].setValue(this.data.prefix)
     this.PrincipalForm.controls['message'].setValue(this.data.message)
     this.PrincipalForm.controls['url'].setValue(this.data.url)
     this.PrincipalForm.controls['nom_application'].setValue(this.data.nom_application)
     this.PrincipalForm.controls['password'].setValue(this.data.password)
     this.PrincipalForm.controls['port'].setValue(this.data.port)
     this.PrincipalForm.controls['config'].setValue(this.data.config)
     this.PrincipalForm.controls['username'].setValue(this.data.username)
     //console.log(this.y)

    })

  }

}
