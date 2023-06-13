import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserregisterService {

  public baseUrl: string = 'http://localhost:8080/api/customer';

  httpOptions = {
    headers: new HttpHeaders({
        'Content-type': 'application/json',
        'X-CSCAPI-KEY': 'MGZMRlZLbkZ0SmNiOGkxQzBlREFLYjBKdlZZU1BnRmlRbGI3N2lvVg=='
    })
    };

  constructor(private http: HttpClient) { }

  public getCities(para:string):Observable<any>{
    return this.http.get('https://api.countrystatecity.in/v1/countries/IN/states/'+para+'/cities',{headers: this.httpOptions.headers} )

  }

  public getStates():Observable<any>{
    return this.http.get(`https://api.countrystatecity.in/v1/countries/IN/states`,{headers: this.httpOptions.headers} )
  }

  public registerUser(customerdetails:any):Observable<any>{
    return this.http.post(this.baseUrl +'/register',customerdetails)
  }
}
