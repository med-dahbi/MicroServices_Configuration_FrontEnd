import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {

  constructor(private http:HttpClient) { }



  login( data :{email: string , password: string}){
  return this.http.post("http://localhost:1115/users/login",data);

  }

}
