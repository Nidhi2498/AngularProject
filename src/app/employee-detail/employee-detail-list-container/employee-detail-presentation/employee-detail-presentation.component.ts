import { Component, Input, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../../employee-service.service';
import { Employee } from '../../employee.model';
import { EmployeePresenterService } from '../employee-detail-presenter/employee-presenter.service';

@Component({
  selector: 'app-employee-detail-presentation',
  templateUrl: './employee-detail-presentation.component.html',
  styleUrls: ['./employee-detail-presentation.component.css'],
  viewProviders: [EmployeePresenterService]
})
export class EmployeeDetailPresentationComponent implements OnInit {

  public employeedata = this.employeeService.checkSalary();
  //set data from employee-detail-container component
  @Input()   public set employeeData(value: Employee[]){
    if(value){
      this.employeedata;
      this._employeeData = value;
    }
  }

  public get employeeData(): Employee[] {
    return this._employeeData
  }
  
  
  //create private variables for emplyee model
  private _employeeData :Employee[] = [];
  constructor(private employeeService: EmployeePresenterService) {
   }

  ngOnInit(): void {
  
  }

  
}

