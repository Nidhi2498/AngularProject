import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { Employee } from '../../employee.model';

@Injectable()
export class EmployeePresenterService {
  public employee! : Employee;
  // public isGreaterSalary:Subject<any> = new Subject();
  // public salary:Subject<any> = new Subject();
  
  //public salary!: number;
  constructor() { }

  public checkSalary(){
    if(this.employee.salary >= 10000)
    {
      this.employee.isGreaterSalary = true;
    }
    else{
      this.employee.isGreaterSalary = false;
    }
  }
  
  
}
