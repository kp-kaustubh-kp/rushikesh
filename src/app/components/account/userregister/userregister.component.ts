import { Component, OnInit } from '@angular/core';
import { Country, CountryLite } from 'country-state-city-js'
import { State } from 'src/app/model/state';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { City } from 'src/app/model/city';
import { UserregisterService } from 'src/app/services/userregister/userregister.service';
import { Router } from '@angular/router';


interface sample_arr {
  rolename:string;
  
  }



@Component({
 
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent implements OnInit {
  
  stateList!: State[];
  cities!: City[];
  selectedState: string="";
  stateparam: any;

  alert:boolean=false;
  alertHead:string="";
  alertContent:string="";
  alertType:string="";
  errorMessage!:number;

  loginform = new FormGroup({
    email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(8) ,Validators.pattern('[0-9A-Za-z!@#$%^&*()]+$')])),
    firstname: new FormControl('', Validators.compose([Validators.required])),
    lastname: new FormControl('', Validators.compose([Validators.required])),
    state: new FormControl('', Validators.compose([Validators.required])),
    city: new FormControl('', Validators.compose([Validators.required])),
    postalcode: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6),Validators.maxLength(6), Validators.pattern('[0-9]+$')])),
    phone: new FormControl('', Validators.compose([Validators.required,Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]+$')])),
  });
  
 
  customerdetails={
    email:"",
    password:"",
    firstname:"",
    lastname:"",
    state:"",
    city:"",
    postalcode:"",
    phone:"",
    roles:[{
      rolename:"ROLE_CUSTOMER"
    }]
  }
 
  
  constructor(private userregister: UserregisterService,private router:Router) { 
    
  }

  onStateSelected(){
    this.stateparam = this.loginform.value.state
    this.userregister.getCities(this.stateparam).subscribe(response =>{
      this.cities = response;
    })
  }


  getstates(){
    this.userregister.getStates().subscribe(response => {
      this.stateList = response;
    });
  }


  registerUser(loginform:any){

    this.customerdetails.email = loginform.email;
    this.customerdetails.password = loginform.password;
    this.customerdetails.firstname = loginform.firstname;
    this.customerdetails.lastname = loginform.lastname;
    this.customerdetails.state = loginform.state;
    this.customerdetails.city = loginform.city;
    this.customerdetails.postalcode = loginform.postalcode;
    this.customerdetails.phone = loginform.phone;

     this.userregister.registerUser(this.customerdetails).subscribe(res =>{
      
        
        // this.alertHead = "Failed"
        // this.alertContent = "Account with same credential exist!"
        // this.alertType="alert-danger"
        // this.alert = true;
        // this.loginform.reset();
        if(res != null){

        this.alertHead = "Success"
        this.alertContent = "Account Created!"
        this.alertType="alert-success"
        this.alert = true;
        this.loginform.reset();

        }
        else{
        this.alertHead = "Failed"
        this.alertContent = "Account with same credential exist!"
        this.alertType="alert-danger"
        this.alert = true;
        this.loginform.reset();
        }
      
      })
      

  }
    
  closeAlert(){
    this.alert = false;
  }
  
  ngOnInit(): void {
    this.getstates();
  }
  
  

}
