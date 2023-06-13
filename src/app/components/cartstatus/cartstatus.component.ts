import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/model/cartitem';
import { CartService } from 'src/app/services/cartservice/cart.service';

@Component({
  selector: 'app-cartstatus',
  templateUrl: './cartstatus.component.html',
  styleUrls: ['./cartstatus.component.css']
})
export class CartstatusComponent implements OnInit {

  item!:number;
 
  constructor(public cart:CartService, private router:Router) {}
 

  ngOnInit(): void {}


}
