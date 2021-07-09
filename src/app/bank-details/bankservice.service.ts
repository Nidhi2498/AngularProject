import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
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
  public searchResult : any;
    //Searching
    public searchAccountName(term: any):Observable<any> {
      if(term == "")
      { 
         console.log("Not defined value");
         return emptyObservable();
      }
      else{
        let params = {name: term}
        return this.httpClient.get(this.baseURL, {params}).pipe(
          map((response:any) => {
            console.log(response);
            return this.searchResult = response["items"]
          })
        )
      }
    }


    public _searchEnteries(term:any): any{
      return  this._searchEnteries(term)
    }
}
function emptyObservable(): Observable<any> {
  throw new Error('Function not implemented.');
}

