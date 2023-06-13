import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Track } from 'src/app/model/track';

@Injectable({
  providedIn: 'root'
})
export class TrackingService {

  constructor(private http: HttpClient) { }

  public getTrackData():Observable<Track[]>{
    return this.http.get<Track[]>('http://localhost:8080/api/track/getall');
  }

  public updateTrack(id:number, para:any){
    return this.http.put(`http://localhost:8080/api/track/update/${id}`,para)
  }

  public getById(id:number):Observable<Track[]>{
    return this.http.get<Track[]>(`http://localhost:8080/api/track/getById/${id}`)
  }
}
