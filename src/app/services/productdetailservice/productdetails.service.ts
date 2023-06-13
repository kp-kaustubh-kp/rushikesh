import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDetails } from '../../model/ProductDetails';

@Injectable({
  providedIn: 'root'
})
export class ProductdetailsService {

  Data1:number=0;

  public baseProductUrl: string = 'http://localhost:8080/api/product/'
  baseUrl:string = 'http://localhost:8080/api/cart/'
 

  constructor(private httpClient: HttpClient) {

  }

  public getProductDetails():Observable<ProductDetails[]>{
    return this.httpClient.get<ProductDetails[]>(this.baseProductUrl+'search/findbyproductid/'+this.Data1)
    // .pipe(
    //   map(res => this.productsArray1 = res));
  }
  public addToCart(orderitem:any) {
    return this.httpClient.post(this.baseUrl + 'registerCartItem/'+localStorage.getItem('id'),orderitem);
  }
}
