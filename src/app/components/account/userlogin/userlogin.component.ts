import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserloginService } from 'src/app/services/userlogin/userlogin.service';

@Component({
  
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  
  alert:boolean=false;
  alertHead:string="";
  alertContent:string="";
  alertType:string="";
  errorMessage!:number;
  rol:any[]=[];
  loginform = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required ,Validators.pattern('^[0-9A-Za-z!@#$%^&*()]{8,30}$')])
  });

 

  constructor(private userlogin: UserloginService, private router: Router) {
   }

  
  loginUser(){
    localStorage.clear();
    this.userlogin.loginUser(this.loginform).subscribe(
      (res:any )=>{ 
          
         
          localStorage.setItem('accessToken', res.accessToken);
          localStorage.setItem('id', res.id);
          localStorage.setItem('role',res.roles[0].rolename);

          this.alertHead = "Success"
          this.alertContent = "Logged-in!"
          this.alertType="alert-success"
          this.alert = true;
          if(res.roles[0].rolename == "ROLE_CUSTOMER"){
          
            this.router.navigate(['trial/trial']);
          }
          else{
           
            this.router.navigate(['admindashboard/admindashboard']);
          }

      },(err)=>{
          this.errorMessage = err.status;
          if(this.errorMessage === 401){

            this.alertHead = "Unauthorized"
            this.alertContent = "Wrong credentials or Not authorized!"
            this.alertType="alert-danger"
            this.alert = true;

          }
      })
     
     
    
  }
  closeAlert(){
    this.alert = false;
  }

  ngOnInit(): void {}

}
