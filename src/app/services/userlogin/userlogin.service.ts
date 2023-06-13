import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserloginService {

  public baseUrl = 'http://localhost:8080/api/customer';

  constructor(private http: HttpClient, private router: Router) { }


  public loginUser(loginform:any){
    return this.http.post('http://localhost:8080/auth/login',loginform.value)
  }
}
