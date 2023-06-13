import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { ProductService } from 'src/app/services/productservice/product.service';
import { ProductdetailsService } from 'src/app/services/productdetailservice/productdetails.service';
import { Category } from 'src/app/model/category';
import { CartService } from 'src/app/services/cartservice/cart.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  p: number = 1;
  public maxSize: number = 20;

  productList!:Product[];
  categoryList!:Category[];
  ascendingordecending: string ="";
  search:string="";
  searchFilter:string="";
  discountPercentage!:number;

  constructor(private products:ProductService,private productdetails:ProductdetailsService, private route:ActivatedRoute,private router:Router, private cart:CartService) 
  {
    this.cart.cartData();
  }


  funcHide(){
    const el = document.getElementById('tgsidenav') as HTMLElement;
    el.style.display = "none";
  }


  funcShow(){
    const el = document.getElementById('tgsidenav') as HTMLElement;
    setTimeout(() => {
      el.style.display = 'block';
    }, 225);
  }

  onSearchFilter(){
      this.searchFilter = this.search;
  }

  onClearFilter(){
    this.search = "";
    this.searchFilter = "";
    this.ascendingordecending = "";

  }

  Datapass(id:any){
    this.productdetails.Data1 = id;
    this.router.navigate(['product/product']);
  }

  categoryIdPass(x:number){
    this.products.categoryId = x;
    if(x != 0){
      this.products.getProductByCategory().subscribe(data =>{
        this.productList = data;
      });
    } 
  }

  noCategory(y:number){
   if(y === 0){
    this.products.getProduct().subscribe(Data => {
      this.productList = Data;
    })
   }
  }

 

  ngOnInit(){

    this.products.getProduct().subscribe(Data => {
      this.productList = Data;
      console.log(this.productList)
     
      
    })

    this.products.getCategory().subscribe(Data => {
      this.categoryList = Data;
    });

  }

 

}




