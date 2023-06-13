import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cartservice/cart.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private cart:CartService) { 
    this.cart.cartData();
  }

  ngOnInit(): void {
  }

}
