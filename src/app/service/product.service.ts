import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseURL = 'http://localhost:4200'; 

@Injectable()
export class ProductService {

  constructor(private httpClient : HttpClient) { }

  readAll() : Observable<any>{
    return this.httpClient.get(baseURL);
  }

  read(id: number) : Observable<any>{
    return this.httpClient.get('${baseURL}/${id}');
  }

  create(data : any) : Observable<any>{
    return this.httpClient.post(baseURL, data);
  }

  addStudent(data : any) : Observable<any>{
    return this.httpClient.post(baseURL, data);
  }
}

