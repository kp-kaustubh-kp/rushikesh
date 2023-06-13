import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { PurchasedItem } from 'src/app/model/purchaseditem';
import { PurchasedhistoryService } from 'src/app/services/purchasedhistory/purchasedhistory.service';





@Component({
  selector: 'app-purchasedhistory',
  templateUrl: './purchasedhistory.component.html',
  styleUrls: ['./purchasedhistory.component.css']
})
export class PurchasedhistoryComponent implements OnInit {

  public purchaseItemList:any=[];
  customerid = Number(localStorage.getItem('id'));
  constructor(private purchasedServ: PurchasedhistoryService, private router:Router) { }
  


  
 

  onTrack(para:string){
    const navigation:NavigationExtras = {
      state:{
        id:para
      }
    }
    this.router.navigate(['trial/trial/trackorder'],{queryParams:{order:para}})
  }
  
  onCancelrequest(para:number, productid:number){
    this.purchasedServ.deletePurchased(para).subscribe(res =>{
      this.purchasedServ.getUpdate(productid).subscribe(res =>{});
      this.callData();
    });
  }

  callData(){
    this.purchasedServ.getPurchasedItemData(this.customerid).subscribe(res => {
      this.purchaseItemList = res;
     })
  }

  
  ngOnInit(): void {

   this.callData(); 
   
  }

}
