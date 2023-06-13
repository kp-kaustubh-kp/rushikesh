import { Component, OnInit } from '@angular/core';
import { AdmindashboardService } from 'src/app/services/admindashboardservice/admindashboard.service';
import { Product } from 'src/app/model/Product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  
  constructor(private router: Router) {
    this.router.navigate(['admindashboard/admindashboard/productTable']);
  }

  myFunc(para:string){

      if(para == 'logout'){
       localStorage.clear();
       this.router.navigate(['home/home']);
      }
      else if(para == 'analysispanel'){
        this.router.navigate(['admindashboard/admindashboard/analysis']);
        
      }
      else if(para == 'addproduct'){
        this.router.navigate(['admindashboard/admindashboard/addproduct']);
      }
      else if(para == 'sales'){
        this.router.navigate(['admindashboard/admindashboard/charts']);
      }
      else{
        this.router.navigate(['admindashboard/admindashboard/productTable']);
      }

  }

  ngOnInit(): void {

    
    
  }

}
