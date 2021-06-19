import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseURL = 'http://localhost:5555/customer/'

@Injectable()
export class CustomerService {

  constructor(private httpClient: HttpClient) { }

  addCustomer(data : any) : Observable<any>{
    return this.httpClient.post(baseURL, data);
  }
}

