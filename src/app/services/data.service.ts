import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment}  from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  options={
    withCredentials: true
  }
  constructor(private http:HttpClient) { }
  
  
  findByPin(pincode:any,SearchDate:any){
    
    
    let obj={
      
    }
   let url=environment.server+"v2/appointment/sessions/public/findByPin?pincode="+pincode+"&date="+SearchDate
   
     return this.http.get(url)
    }
}
