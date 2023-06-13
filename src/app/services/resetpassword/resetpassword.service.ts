import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ResetpasswordService {

  // header = new HttpHeaders().set("Authorization", 'Bearer ' + localStorage.getItem('accessToken'));
 
  public customerBaseUrl = 'http://localhost:8080/api/customer/';
  constructor(private http: HttpClient) { }

  public getResetPassword(id:any, para:any) {
    return this.http.put(this.customerBaseUrl+`updatepassword/${id}`,para.value);
  }
}
