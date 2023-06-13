import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {
 
 
  

  
  
  baseUrl:string = 'http://localhost:8080/api/cart/'
  

  cartItemSize!:number; 

  constructor(private http: HttpClient) {

   
   
     
   }

  cartData(){
    this.getCartItemCount(localStorage.getItem('id')).subscribe(res =>{
      
     this.cartItemSize =res;
   })
  }

 

  public getCartItem(userId:any):Observable<any>{
    return this.http.get(this.baseUrl+'getCartItem/customerid/'+userId);
  }

  public addQuantAndPrice(id:number,para:any) {
     return this.http.put(this.baseUrl+'updateQuantityAndPrice/'+id,para);
  }
  public decQuantAndPrice(id: number,para:any) {
      return this.http.put(this.baseUrl+'decQuantityAndPrice/'+id,para);
  }
  public deleteCartItem(id:number){
      return this.http.delete(this.baseUrl+'deleteCartItem/'+id);
  }
  
  public getCartItemCount(userId:any):Observable<any>{
      return this.http.get(`http://localhost:8080/api/cart/cartCount/${userId}`);
  }
 
}
