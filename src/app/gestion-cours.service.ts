import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestionCoursService {


  constructor(private http:HttpClient) { }
  GetDefaultConfig(){
    let url="http://localhost:8080/GestionDesCours/DefaultProfile";
    return this.http.get(url);
  }


  GetProdConfig(){
    let url="http://localhost:8080/GestionDesCours/ProdProfile";
    return this.http.get(url);

  }

  GetDevConfig(){
    let url="http://localhost:8080/GestionDesCours/DevProfile";
    return this.http.get(url);


  }

  GetTestConfig(){
    let url="http://localhost:8080/GestionDesCours/TestProfile";
    return this.http.get(url);


  }








  GetDefaultConfigProf(){
    let url="http://localhost:8080/GestionDesProfesseurs/DefaultProfile";
    return this.http.get(url);
  }


  GetProdConfigProf(){
    let url="http://localhost:8080/GestionDesProfesseurs/ProdProfile";
    return this.http.get(url);

  }

  GetDevConfigProf(){
    let url="http://localhost:8080/GestionDesProfesseurs/DevProfile";
    return this.http.get(url);


  }

  GetTestConfigProf(){
    let url="http://localhost:8080/GestionDesProfesseurs/TestProfile";
    return this.http.get(url);


  }

  saveDefault(data: any){
    let url="http://localhost:8080/GestionDesCours/Default";
    return this.http.post(url,data);

  }

  saveProduction(data: any){
    let url="http://localhost:8080/GestionDesCours/Production";
    return this.http.post(url,data);

  }
  saveDeveloppement(data: any){
    let url="http://localhost:8080/GestionDesCours/Developpement";
    return this.http.post(url,data);

  }

  saveTest(data: any){
    let url="http://localhost:8080/GestionDesCours/Test";
    return this.http.post(url,data);

  }











  saveDefaultProf(data: any){
    let url="http://localhost:8080/GestionDesEnseignants/Default";
    return this.http.post(url,data);

  }

  saveProductionProf(data: any){
    let url="http://localhost:8080/GestionDesEnseignants/Production";
    return this.http.post(url,data);

  }
  saveDeveloppementProf(data: any){
    let url="http://localhost:8080/GestionDesEnseignants/Developpement";
    return this.http.post(url,data);

  }

  saveTestProf(data: any){
    let url="http://localhost:8080/GestionDesEnseignants/Test";
    return this.http.post(url,data);

  }

}



