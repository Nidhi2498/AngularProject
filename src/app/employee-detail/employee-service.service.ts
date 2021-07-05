import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Employee } from './employee.model';

@Injectable()
export class EmployeeServiceService {
  public url = "http://localhost:3000/"
  
  constructor(private http: HttpClient) { }

  public getemployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.url}employee`)
  }
}
