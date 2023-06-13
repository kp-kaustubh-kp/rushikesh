import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Track } from 'src/app/model/track';
import { TrackingService } from 'src/app/services/tracking/tracking.service';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {

  trackingList!:Track[];
  trackingone!:Track[];
  p: number = 1;
  public maxSize: number = 20;
  search:string="";
  status:string="desc";
  prop:string="orderconfirmed";
  trackid!:number;

  sta = new FormGroup({
    orderconfirmed: new FormControl(false),
    pickedbycourier: new FormControl(false),
    ontheway: new FormControl(false),
    outfordelivery: new FormControl(false),
    delivered: new FormControl(false),
    pending: new FormControl(false)
  })

 
 

  constructor(private track:TrackingService) {

   
   }

  onSubmitModal(id:number){
    this.trackid = id;
    this.track.getById(this.trackid).subscribe(res => {
        this.trackingone = res;
        console.log(this.trackingone)
        this.sta = new FormGroup({
          orderconfirmed: new FormControl(res[0].orderconfirmed),
          pickedbycourier: new FormControl(res[0].pickedbycourier),
          ontheway: new FormControl(res[0].ontheway),
          outfordelivery: new FormControl(res[0].outfordelivery),
          delivered: new FormControl(res[0].delivered),
          pending: new FormControl(res[0].pendings)
        })
    });
   } 
  onClearFilter(){
    this.search = "";
    this.status = "desc";
    this.prop = "orderconfirmed";
  }

  onSubmit(sta:any){
    this.track.updateTrack(this.trackid, sta).subscribe(res =>{
      console.log(res);
      this.callData();
      
    })
    
  }
  callData(){

    this.track.getTrackData().subscribe(res =>{
      this.trackingList = res;

     
    })

  }

  ngOnInit(): void {

    this.callData();
    
  }

}
