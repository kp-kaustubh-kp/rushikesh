import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router){

  }

  canActivate(){
    let Role = localStorage.getItem('role');
    if(Role == 'ROLE_CUSTOMER'){
      return true;
    }
    alert("You dont have customer rights!")
    return false;
  }
  
}
