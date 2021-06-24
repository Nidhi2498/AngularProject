import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer.model';



@Injectable()
export class CustomerService {
  public baseURL = 'http://localhost:3000/'
  constructor(private httpClient: HttpClient) { }

  public addCustomer(data:Customer):Observable<Customer>{
    return this.httpClient.post<Customer>(`${this.baseURL}customer`, data);
  }

  public getCustomer():Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(`${this.baseURL}customer`)
  }

  public editCustomer(data:number):Observable<Customer>{
    return this.httpClient.get<Customer>(`${this.baseURL}customer/${data}`)
  }
  public upadteCustomer(data:Customer):Observable<Customer>{
    return this.httpClient.put<Customer>(`${this.baseURL}customer/${data.id}`,data)
  }

  public deleteCustomer(id:number):Observable<number>{
    return this.httpClient.delete<number>(`${this.baseURL}customer/${id}`)
  }  

}

