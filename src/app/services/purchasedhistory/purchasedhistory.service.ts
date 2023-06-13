import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PurchasedItem } from 'src/app/model/purchaseditem';

@Injectable({
  providedIn: 'root'
})
export class PurchasedhistoryService {
  
  public baseUrl: string = 'http://localhost:8080/api/purchased/';
  constructor(private http: HttpClient) { }

  public getPurchasedItemData(para:number):Observable<any> {
    return this.http.get<any>(this.baseUrl+'getpurchaseditem/customerid/'+para);
  }

  public deletePurchased(para:number){
    return this.http.delete(this.baseUrl+'deletepurchased/'+para);
  }   

  public getUpdate(id:number){
    return this.http.put('http://localhost:8080/api/product/updateproductoncancel/oncancelrequest/'+id,null)
  }
}
