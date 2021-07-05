import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Bankdetails } from './bankdetails.model';

@Injectable()
export class BankserviceService {
  public baseURL = "http://localhost:3000/"
  constructor(private httpClient: HttpClient) {}

  public addBankDetail(data:Bankdetails):Observable<Bankdetails>{
    return this.httpClient.post<Bankdetails>(`${this.baseURL}bankdetail`, data);
  }

  public getBankDetail(accountHolderName?: string):Observable<Bankdetails[]>{
    return this.httpClient.get<Bankdetails[]>(`${this.baseURL}bankdetail?accountHolderName=${accountHolderName}`)
  }

  public geteditBankDetailbyId(id:number):Observable<Bankdetails>{
    return this.httpClient.get<Bankdetails>(`${this.baseURL}bankdetail/${id}`)
  }
  
  public updateBankDetail(data:Bankdetails):Observable<Bankdetails>{
    return this.httpClient.put<Bankdetails>(`${this.baseURL}bankdetail/${data.id}`,data)
  }

  public deleteBankDetail(id:number):Observable<number>{
    return this.httpClient.delete<number>(`${this.baseURL}bankdetail/${id}`)
  } 
}
