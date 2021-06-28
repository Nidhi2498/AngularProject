import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Student } from './student.model';


@Injectable()
export class CommonService {
 
  constructor(private http:HttpClient){}
  
  public getdata():Observable<any>
  {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users')
  }

  // public getMessage =() =>{
  //   return this.http.get(environment.apiurl+'/api/message')
  //   .switchMap()
  // }

}
