import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Category } from 'src/app/model/category';
import { AdmindashboardService } from 'src/app/services/admindashboardservice/admindashboard.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  productId!:number;
  catId!:number;
  dataform = new FormGroup({
    name: new FormControl('',Validators.compose([Validators.required])),
    description: new FormControl('',Validators.compose([Validators.required])),
    price: new FormControl('',Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(15), Validators.pattern('[0-9]+$')])),
    stock: new FormControl('',Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(10), Validators.pattern('[0-9]+$')])),
    category: new FormControl('',Validators.compose([Validators.required]))
  })

  imageform = new FormGroup({
    image1: new FormControl('',Validators.compose([Validators.required])),
    image2: new FormControl('',Validators.compose([Validators.required])),
    image3: new FormControl('',Validators.compose([Validators.required])),
    image4: new FormControl('',Validators.compose([Validators.required])),
    image5: new FormControl('',Validators.compose([Validators.required]))
  })

  productDetails={
    product_name:"",
    product_description:"",
    product_unit_price:0,
    product_unit_instock:0,
    active:true,
  }

  categoryList!:Category[];

  alert:boolean=false;
  alertHead:string="";
  alertContent:string="";
  alertType:string="";
  errorMessage!:number;

  constructor(private admin:AdmindashboardService) { }


  onSubmitData(dataform:any){

    this.catId = Number(dataform.category);
    this.productDetails.product_name = dataform.name;
    this.productDetails.product_description = dataform.description;
    this.productDetails.product_unit_price = dataform.price;
    this.productDetails.product_unit_instock = dataform.stock;
    
    this.admin.registerProduct(this.catId, this.productDetails).subscribe(res =>{
      console.log(res);
      if(res != null){

        this.admin.findProductByName(dataform.name).subscribe(res =>{
          this.productId = res;
          console.log("resgisterProductId : "+this.productId);
        })
        this.alertHead = "Success"
        this.alertContent = "Product added successfully!"
        this.alertType="alert-success"
        this.alert = true;
        

      }
      else{
        this.alertHead = "Failed"
        this.alertContent = "Something went wrong, try again!"
        this.alertType="alert-danger"
        this.alert = true;
        

      }
      
    })

    
  }
  onSubmitImage(imageform:any){
    this.admin.registerProductImage(this.productId, imageform).subscribe(res =>{
      console.log(res);
      if(res != null){
        this.alertHead = "Success"
        this.alertContent = "Product Images added successfully!"
        this.alertType="alert-success"
        this.alert = true;
      }
      else{
        this.alertHead = "Failed"
        this.alertContent = "Something went wrong, try again!"
        this.alertType="alert-danger"
        this.alert = true;
      }
    });
    this.dataform.reset();
    this.imageform.reset();
  }

  closeAlert(){
    this.alert = false;
  }

  ngOnInit(): void {

    this.admin.getCategory().subscribe(res =>{
      this.categoryList = res;
    })
  }

}
