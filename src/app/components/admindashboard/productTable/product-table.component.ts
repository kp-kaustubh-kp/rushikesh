import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { AdmindashboardService } from 'src/app/services/admindashboardservice/admindashboard.service';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {

  productList!:Product[];
  p: number = 1;
  public maxSize: number = 20;
  search:string="";
  status:string="desc";
  prop:string="active";

  constructor(private admindashboard:AdmindashboardService, private router:Router, private admin:AdmindashboardService) { }

  
  onClearFilter(){
    this.search = "";
    this.status = "desc";
    this.prop = "active";
  }

  onUpdate(productid:number, productimgid:number){
    this.router.navigate(['admindashboard/admindashboard/updateproduct',productid,productimgid])
  }

  onDelete(id:number){
    this.admin.deleteById(id).subscribe(res =>{
      this.getProductTableData();
    })
  }

  getProductTableData(){
    this.admindashboard.getProduct().subscribe(res =>{
      this.productList = res;
      console.log(this.productList);
    });
  }

  ngOnInit(): void { 

    this.getProductTableData();
  }

}
