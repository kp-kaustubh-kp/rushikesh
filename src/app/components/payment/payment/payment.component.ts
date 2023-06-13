import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/model/cartitem';
import { City } from 'src/app/model/city';
import { State } from 'src/app/model/state';
import { CartService } from 'src/app/services/cartservice/cart.service';
import { PaymentService } from 'src/app/services/payment/payment.service';
import * as uuid from 'uuid';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
 
  receivedData!:CartItem[];
  stateList!: State[];
  cities!: City[];
  checkoutform!:FormGroup;
  statepara!:string;
  productId!:number;
  purchased={
    purchased_product_id:0,
    purchased_product_image:"",
    purchased_product_trackingid:"",
    purchased_product_name:"",
    purchased_product_price:0,
    purchased_product_quantity:0,
    track:{
      image:"",
      trackingid:"",
      productname:"",
      orderconfirmed:false
    }
      
  }
 
  constructor(private pay: PaymentService, private formBuilder: FormBuilder, private router: Router, private cart: CartService) { 

    
    this.checkoutform = this.formBuilder.group({
      shippingaddress: this.formBuilder.group({
        housenumber:new FormControl('', [Validators.required]),
        area:new FormControl('', Validators.compose([Validators.required])),
        state:new FormControl('', Validators.compose([Validators.required])),
        city:new FormControl('', Validators.compose([Validators.required])),
        postalcode:new FormControl('',Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(6), Validators.pattern('[0-9]+$')]))
      }),
      billingaddress: this.formBuilder.group({
        housenumber:new FormControl('', Validators.compose([Validators.required])),
        area:new FormControl('', Validators.compose([Validators.required])),
        state:new FormControl('', Validators.compose([Validators.required])),
        city:new FormControl('', Validators.compose([Validators.required])),
        postalcode:new FormControl('', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(6), Validators.pattern('[0-9]+$')]))
      }),
      creditcard: this.formBuilder.group({
        nameoncard:new FormControl('', Validators.compose([Validators.required, Validators.pattern('[A-Za-z]+$')])),
        cardnumber:new FormControl('', Validators.compose([Validators.required, Validators.minLength(12), Validators.maxLength(12),Validators.pattern('[0-9]+$')])),
        cvv:new FormControl('', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(3) ,Validators.pattern('[0-9]+$')])),
        expirydate:new FormControl('', Validators.compose([Validators.required]))
        
      })

    })


    
  }

  get billingAddressState() { return this.checkoutform.get('billingaddress.state'); }
  get shippingAddressState() { return this.checkoutform.get('shippingaddress.state'); }
  getstates(){
    this.pay.getStates().subscribe(response => {
      this.stateList = response;
    });
  }

  onStateSelected(){
    this.statepara = this.checkoutform.get('shippingaddress.state')?.value;
    console.log(this.statepara);
    this.pay.getCities(this.statepara).subscribe(response =>{
      this.cities = response;
    })
  }
  

  onSubmit(){
    // console.log("Billing Address Object",this.checkoutform.get('billingaddress')?.value);
    // console.log("Shipping Address Object",this.checkoutform.get('shippingaddress')?.value);
    // console.log("Card Object",this.checkoutform.get('creditcard')?.value);
    let customerid = localStorage.getItem('id');
    const trackingid = uuid.v4();

    this.purchased.purchased_product_id = this.receivedData?.[0].cart_item_product_id;
    this.purchased.purchased_product_image = this.receivedData?.[0].cart_item_image;
    this.purchased.purchased_product_name = this.receivedData?.[0].cart_item_name;
    this.purchased.purchased_product_price = this.receivedData?.[0].cart_item_totalprice;
    this.purchased.purchased_product_quantity = this.receivedData?.[0].cart_item_quantity;
    this.purchased.purchased_product_trackingid = trackingid;
    this.purchased.track.image = this.receivedData?.[0].cart_item_image;
    this.purchased.track.trackingid = trackingid;
    this.purchased.track.productname = this.receivedData?.[0].cart_item_name;
    this.purchased.track.orderconfirmed = true;
    
    this.pay.Purchased(customerid,this.purchased).subscribe(res =>{
    })

    this.productId = this.purchased.purchased_product_id;

    this.pay.getUpdate(this.productId).subscribe(res =>{});

    alert("Purchased Item Successfully")
    this.router.navigate(['landing/landing']);
    
    this.pay.deleteIfPurchased().subscribe(res =>{});
    this.cart.cartData();
    
   
    

  }

  onChangeValue(event:Event){
    let ele1 = document.getElementById('flexCheckDefault') as HTMLInputElement;
      
      if(ele1.checked){
        this.checkoutform.controls['billingaddress'].setValue(this.checkoutform.controls['shippingaddress'].value);
      }
      else{
        this.checkoutform.controls['billingaddress'].reset();
      }
  }


  
  ngOnInit(): void {

    this.pay.getCartData().subscribe((data) => {
      this.receivedData = data; // And he have data here too!
    });
    this.getstates();
  
  }

}
