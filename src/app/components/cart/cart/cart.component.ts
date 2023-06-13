import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/model/cartitem';
import { CartService } from 'src/app/services/cartservice/cart.service';
import { PaymentService } from 'src/app/services/payment/payment.service';
import { PaymentComponent } from '../../payment/payment/payment.component';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartList!:CartItem[];
 
  totalPrice!:number;
  quantityval!: number;
  flag:boolean = false;
  y!:number;
  item={
    cart_item_totalprice:0,
    cart_item_quantity:0,

  }
 
  constructor(public cart: CartService, private pay:PaymentService, private router:Router) {
    this.cartData();
  }

  incrementQuantity(price:number,id:number,quant:number){
      this.quantityval=quant;
      this.quantityval++;
      this.totalPrice = price*this.quantityval;
      this.item.cart_item_totalprice = this.totalPrice;
      this.item.cart_item_quantity = this.quantityval;

      if(this.quantityval <= 5 && this.quantityval > 0){
          this.cart.addQuantAndPrice(id,this.item).subscribe(res =>{
            this.cartData();
          })
      }
      else{
        alert("You reached to maximum per order limit")
      }
      this.cartData();
  }



  decrementQuantity(price:number,id:number,quant:number,tot:number){
        this.quantityval=quant;
        this.totalPrice=tot;
        this.quantityval--;
        this.totalPrice = this.totalPrice - price;
        this.item.cart_item_totalprice = this.totalPrice;
        this.item.cart_item_quantity = this.quantityval;
        if(this.quantityval > 0){
          this.cart.decQuantAndPrice(id,this.item).subscribe(res =>{
            this.cartData(); 
          })
        }
            
  }


  deleteCartItem(id:number){
    this.cart.deleteCartItem(id).subscribe(res =>{
      this.cartData();
      this.cart.cartData();
    });
    this.cartData();
  }


  cartData(){
    this.cart.getCartItem(localStorage.getItem('id')).subscribe(response =>{
      this.cartList = response;
    })
  }

  finalData(data:number){
   
      this.pay.data = data;
      this.router.navigate(['payment/payment']);
  }
 
  ngOnInit(): void {
    this.cartData();
  }

  
}
