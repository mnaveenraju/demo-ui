import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor( private http: HttpClient) {

  }

  httpOptions= {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    }

  //get demo list
  getDemoList() {
    const url = environment.serverUrl+'demo/list';
    return this.http.get(url, this.httpOptions)   
  }

  //create demo
  createDemo(data) {
    const url = environment.serverUrl+'demo/create';
    return this.http.post(url, data, this.httpOptions) 
  }

   //update demo
   updateDemo(data) {
    const url = environment.serverUrl+'demo/update';
    return this.http.put(url, data, this.httpOptions) 
  }

   //de delete
   deleteDemo(id) {
    const url = environment.serverUrl+'demo/delete/'+id;
    return this.http.delete(url, this.httpOptions) 
  }

}
