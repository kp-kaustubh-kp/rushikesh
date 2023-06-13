import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/model/category';
import { Product } from 'src/app/model/Product';

@Injectable({
  providedIn: 'root'
})
export class AdmindashboardService {
  
  
  public BaseUrl = 'http://localhost:8080/api/product/';
  public categoryUrl = 'http://localhost:8080/api/category/';
  
  constructor(private http: HttpClient) { }

  public getProduct():Observable<Product[]> {
    return this.http.get<Product[]>(this.BaseUrl + 'all');
  }

  public getCategory():Observable<Category[]> {
    return this.http.get<Category[]>(this.categoryUrl + 'all');
  }

  public findProductByName(para:string):Observable<any>{
    return this.http.get<any>(`http://localhost:8080/api/product/search/findproductid/name/${para}`);
  }

  public registerProduct(catId:number, productDetails:any) {
    return this.http.post(`http://localhost:8080/api/product/registerproduct/${catId}`,productDetails);
  }

  public registerProductImage(productId:number, imageform:any){
    return this.http.post(`http://localhost:8080/api/image/setproductimages/${productId}`,imageform)

  }
  public getProductById(para:number){
    return this.http.get(`http://localhost:8080/api/product/search/findbyproductid/${para}`)
  }

  public updateData(id:number, updateform:any){
    return this.http.put(`http://localhost:8080/api/product/updateproduct/${id}`, updateform)
  }

  public getProductImageById(id:number){
    return this.http.get(`http://localhost:8080/api/image/getimagebyid/${id}`)
  }

  public updateImageData(id:number, imageform:any){
    return this.http.put(`http://localhost:8080/api/image/updateimage/${id}`,imageform);
  }
  
  public deleteById(id:number){
    return this.http.delete(`http://localhost:8080/api/product/deleteproduct/${id}`);
  }
}
