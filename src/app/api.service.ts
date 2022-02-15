import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { PulseDTO,NewsDTO,BasketDTO, MessageDTO } from  './interface';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'https://tbp64nneh7.execute-api.ap-south-1.amazonaws.com/prod/leads'; 

  constructor(private http: HttpClient) { }

  posMethod(data: any){
    // console.log('making post api call'+subUrl, JSON.stringify(data))
    return this.http.post<any>(this.url, JSON.stringify(data), {headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'x-api-key':'Xzo4xVDrr9978ESZEWq7b64sYX9ysKcZ4BtWbqr9'
})})
  }
}
