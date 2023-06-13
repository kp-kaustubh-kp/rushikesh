import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private router: Router){}
  canActivate() 
  {
   let Role = localStorage.getItem('role');
   if(Role == 'ROLE_ADMIN'){
    return true;
   }
   alert("You dont have admin rights!");
   this.router.navigate(['trial/trial/welcome'])
   return false;
  }
  
}
