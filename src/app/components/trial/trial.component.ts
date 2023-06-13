import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trial',
  templateUrl: './trial.component.html',
  styleUrls: ['./trial.component.css']
})
export class TrialComponent implements OnInit {
  
 

  constructor(private router:Router) {
    this.router.navigate(['trial/trial/welcome'])
   }
  

  myFunc(para:string){
    
    if(para==='history'){
      this.router.navigate(['trial/trial/purchasedhistory'])
    }
    else if(para==='resetpassword'){
      this.router.navigate(['trial/trial/resetpassword'])
    }
    else if(para==='trackorder'){
      this.router.navigate(['trial/trial/trackorder'])
    }
    else if(para==='wishlist'){
      localStorage.clear();
      this.router.navigate(['account/account']);
      // this.router.navigate(['trial/trial/wishlist'])
    }
    else{
      this.router.navigate(['trial/trial/welcome'])
    }

  }

  onLogout(){
    localStorage.clear();
    this.router.navigate(['account/account']);

  }

  ngOnInit(): void {

   
  }

}
