import { Component, OnInit } from '@angular/core';

@Component({

  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  flag:boolean = true;
  constructor() {}

  apply(value:string){
    this.flag = value == "login"?true : false;
  }

  ngOnInit(): void {}

}
