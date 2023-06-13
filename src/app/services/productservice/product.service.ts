import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/model/category';
import { Product } from 'src/app/model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public baseProductUrl: string = 'http://localhost:8080/api/product/'
  public baseCategoryUrl: string = 'http://localhost:8080/api/category/'
  categoryId!: number;

  

  constructor(private httpClient: HttpClient) { }

  public getCartItemSize(){
    return this.getCartItemSize
  }
  //get all products
  public getProduct():Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.baseProductUrl+'all')
  }

  //get all category
  public getCategory():Observable<Category[]>{
    return this.httpClient.get<Category[]>(this.baseCategoryUrl+'all')
  }
  
  //get product by category
  public getProductByCategory():Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.baseProductUrl+'search/findbycategoryid/'+this.categoryId);
      
    }
  }

