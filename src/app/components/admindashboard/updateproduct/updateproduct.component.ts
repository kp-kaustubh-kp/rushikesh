import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { AdmindashboardService } from 'src/app/services/admindashboardservice/admindashboard.service';
@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {

  updateform = new FormGroup({

    product_name: new FormControl('',Validators.compose([Validators.required])),
    product_description: new FormControl('',Validators.compose([Validators.required])),
    product_unit_price: new FormControl('',Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(15), Validators.pattern('[0-9]+$')])),
    product_unit_instock: new FormControl('',Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(10), Validators.pattern('[0-9]+$')])),
    product_discount_price: new FormControl('',Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(15), Validators.pattern('[0-9]+$')])),
    active: new FormControl('',Validators.compose([Validators.required]))

  });

  imageform = new FormGroup({
    image1: new FormControl('',Validators.compose([Validators.required])),
    image2: new FormControl('',Validators.compose([Validators.required])),
    image3: new FormControl('',Validators.compose([Validators.required])),
    image4: new FormControl('',Validators.compose([Validators.required])),
    image5: new FormControl('',Validators.compose([Validators.required]))
  })

 


  prodId!:number;
  prodImageId!:number;

  alert:boolean=false;
  alertHead:string="";
  alertContent:string="";
  alertType:string="";
  errorMessage!:number;

  constructor(private router: Router, private route: ActivatedRoute, private admin:AdmindashboardService) {
    this.prodId = Number(this.route.snapshot.paramMap.get('productid'))
    this.prodImageId = Number(this.route.snapshot.paramMap.get('productimgid'))
   
   }

  onSubmitData(updateform:any){
    console.log(updateform)
    this.admin.updateData(this.prodId, updateform).subscribe(res => {
      if(res === null){
        this.alertHead = "Success"
        this.alertContent = "Product details updated!"
        this.alertType="alert-success"
        this.alert = true;
      }
      else{
        this.alertHead = "Failed"
        this.alertContent = "Something wrong, try again!"
        this.alertType="alert-danger"
        this.alert = true;
      }
    })
  }

  onSubmitImage(imageform:any){

    this.admin.updateImageData(this.prodImageId, imageform).subscribe(res => {});

  }

  closeAlert(){
    this.alert = false;
  }
  

  ngOnInit(): void {

    this.admin.getProductById(this.prodId).subscribe((res:any)=>{
      this.updateform = new FormGroup({
        product_name: new FormControl(res[0].product_name),
        product_description: new FormControl(res[0].product_description),
        product_unit_price: new FormControl(res[0].product_unit_price),
        product_unit_instock: new FormControl(res[0].product_unit_instock),
        product_discount_price: new FormControl(res[0].product_discount_price),
        active: new FormControl(res[0].active)
    });  
    })

    this.admin.getProductImageById(this.prodImageId).subscribe((res:any)=> {

      this.imageform = new FormGroup({
        image1: new FormControl(res[0].image1),
        image2: new FormControl(res[0].image2),
        image3: new FormControl(res[0].image2),
        image4: new FormControl(res[0].image2),
        image5: new FormControl(res[0].image2)
      })
      
    })

    
  }

}
