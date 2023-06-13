import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResetpasswordService } from 'src/app/services/resetpassword/resetpassword.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  loginform = new FormGroup({
    password: new FormControl('', Validators.compose([Validators.required ,Validators.pattern('^[0-9A-Za-z!@#$%^&*()]{8,30}$')])),
    confirmpassword: new FormControl('', Validators.compose([Validators.required ,Validators.pattern('^[0-9A-Za-z!@#$%^&*()]{8,30}$')]))
  });

  alert:boolean=false;
  alertHead:string="";
  alertContent:string="";
  alertType:string="";
  formDirective: any;

  constructor(private  resetpassword: ResetpasswordService, private router: Router) { }


  loginUser(){  
    if(this.loginform.value.password === this.loginform.value.confirmpassword){
      this.resetpassword.getResetPassword(localStorage.getItem('id'),this.loginform).subscribe(res =>
        {
         
        });
      this.alertHead = "Success"
      this.alertContent = "Resetpassword!"
      this.alertType="alert-success"
      this.alert = true;
      this.loginform.reset();
    }
    else{
      this.alertHead = "Error"
      this.alertContent = "Password not match!"
      this.alertType="alert-danger"
      this.alert = true;
      this.loginform.reset(); 
    }
 
    
  }

  closeAlert(){
    // this.alert = false;
  } 

  ngOnInit(): void {
  }

}
