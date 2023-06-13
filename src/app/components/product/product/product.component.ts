import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, delay } from 'rxjs';
import { CartItem } from 'src/app/model/cartitem';
import { ProductDetails } from 'src/app/model/ProductDetails';
import { CartService } from 'src/app/services/cartservice/cart.service';
import { ProductdetailsService } from 'src/app/services/productdetailservice/productdetails.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 
  productDetailList!:ProductDetails[];
  shoesSize!:number;
  alert:boolean=false;
  alertHead:string="";
  alertContent:string="";
  alertType:string="";
  
  flag:boolean = false;
  flag2:boolean = false;
  discount: boolean=false;
  discountPercentage!:string;


  orderitem={
    id:"",
    cart_item_product_id:0,
    cart_item_image:"",
    cart_item_name:"",
    cart_item_size:0,
    cart_item_price:0,
    cart_item_totalprice:0,
    cart_item_quantity:0,
  }
  constructor(private productdetails:ProductdetailsService, public productdetail:ProductdetailsService, public cart:CartService,private router:Router) { 
    
  }
  
  
  addCart(theProduct:ProductDetails){
          if(localStorage.getItem('accessToken') && (localStorage.getItem('role') == 'ROLE_CUSTOMER')){
            if(theProduct.product_discount_price != null){

              this.orderitem.cart_item_product_id = theProduct.id;
              this.orderitem.cart_item_name = theProduct.product_name;
              this.orderitem.cart_item_image = theProduct.productImages[0].image1;
              this.orderitem.cart_item_price = theProduct.product_discount_price;
              this.orderitem.cart_item_size = this.shoesSize;
              this.orderitem.cart_item_totalprice = theProduct.product_discount_price;;
              this.orderitem.cart_item_quantity = 1;
      
              this.productdetail.addToCart(this.orderitem).subscribe(data =>{
                this.cart.cartData();
              })
            
              this.alertHead = "Success"
              this.alertContent = "Product Added in cart!"
              this.alertType="alert-success"
              this.alert = true;

            }
            else{

              this.orderitem.cart_item_product_id = theProduct.id;
              this.orderitem.cart_item_name = theProduct.product_name;
              this.orderitem.cart_item_image = theProduct.productImages[0].image1;
              this.orderitem.cart_item_price = theProduct.product_unit_price;
              this.orderitem.cart_item_size = this.shoesSize;
              this.orderitem.cart_item_totalprice = theProduct.product_unit_price;;
              this.orderitem.cart_item_quantity = 1;
      
              this.productdetail.addToCart(this.orderitem).subscribe(data =>{
                this.cart.cartData();
              })
            
              this.alertHead = "Success"
              this.alertContent = "Product Added in cart!"
              this.alertType="alert-success"
              this.alert = true;

            }
         
          
          }
          else{
            this.alertHead = "Failed"
            this.alertContent = "Need to log-in first!"
            this.alertType="alert-danger"
            this.alert = true;
          }
                 

  }

  
  closeAlert() {
    this.alert = false;
  }
 
  ngOnInit(): void {

    this.productdetails.getProductDetails().subscribe((Data) => {
      this.productDetailList=Data;
      let x = Number(document.getElementById('price') as HTMLElement);
     
      
    });

   

  }

  

}
