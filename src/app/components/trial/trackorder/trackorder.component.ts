import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { UserdashboardService } from 'src/app/services/userdashboard/userdashboard.service';

@Component({
  selector: 'app-trackorder',
  templateUrl: './trackorder.component.html',
  styleUrls: ['./trackorder.component.css']
})
export class TrackorderComponent implements OnInit {

  val:string="";
  trackingList:any=[];
  
  constructor(private router: Router, private activate:ActivatedRoute, private userdashboard: UserdashboardService) {
  
    this.activate.queryParams.subscribe(params => {
      this.val = params['order'];
    })
   
  }

  ngOnInit(): void {

    this.userdashboard.getTrackList(this.val).subscribe(res => {
      this.trackingList = res;
      
    });

  }

}
