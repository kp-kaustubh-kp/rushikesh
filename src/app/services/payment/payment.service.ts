import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
 
  

  tempData!:any[];
  data!:number;
  // getCartData$: Observable<any>;
  // private myMethodSubject = new BehaviorSubject<any>("");
  baseUrl:string = 'http://localhost:8080/api/cart/'
  baseUrlPurchased:string = 'http://localhost:8080/api/purchased/'
  httpOptions = {
    headers: new HttpHeaders({
        'Content-type': 'application/json',
        'X-CSCAPI-KEY': 'MGZMRlZLbkZ0SmNiOGkxQzBlREFLYjBKdlZZU1BnRmlRbGI3N2lvVg=='
    })
    };

  constructor(private http:HttpClient) { 
    // this.getCartData$ = this.myMethodSubject.asObservable();
  }


  public getCities(para:string):Observable<any>{
    return this.http.get('https://api.countrystatecity.in/v1/countries/IN/states/'+para+'/cities',{headers: this.httpOptions.headers} )

  }

  public getStates():Observable<any>{
    return this.http.get(`https://api.countrystatecity.in/v1/countries/IN/states`,{headers: this.httpOptions.headers} )
  }

  
  public getCartData():Observable<any>{
    // console.log("data at payment service",data)
    // this.myMethodSubject.next(data);
    return this.http.get(this.baseUrl+'getCartItem/'+this.data)
  }

  public deleteIfPurchased() {
    return this.http.delete(this.baseUrl+'deleteCartItem/'+this.data)
  }

  public Purchased(para:any,purchased:any) {
    return this.http.post(this.baseUrlPurchased+'register/'+para,purchased)
  }

  public getUpdate(id:number){
    return this.http.put('http://localhost:8080/api/product/updateproduct/saleandstock/'+id,null)
  }
  
  
}
