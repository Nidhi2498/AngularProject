import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student.model';

const url = 'http://localhost:4200'
@Injectable({
  providedIn: 'root'
})
export class CommonService {
 
  constructor(private http:HttpClient){}
  student!: Student[];
  
  public addstudent(data:Student):Observable<Student>{
    return this.http.post<Student>(`${url}student`, data);
  }

  public getStudent():Observable<Student>{
    return this.http.get<Student>(url).pipe()
     
  }
  
}
