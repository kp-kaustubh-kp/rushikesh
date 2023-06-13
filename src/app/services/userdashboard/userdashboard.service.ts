import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdashboardService {
 
  public trackingBaseUrl: string = 'http://localhost:8080/api/track/';
  constructor(private http: HttpClient) { }


  public getTrackList(val: string) {
    return this.http.get(this.trackingBaseUrl+'getTrack/'+val);
  }
}
