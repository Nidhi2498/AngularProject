import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-detail-list-container',
  templateUrl: './employee-detail-list-container.component.html',
  styleUrls: ['./employee-detail-list-container.component.css']
})
export class EmployeeDetailListContainerComponent implements OnInit {
  public employeeList$!: Observable<any>;

  constructor(private employeeService: EmployeeServiceService) { 
    this.employeeList$ = this.employeeService.getemployees();
  }

  ngOnInit(): void {
  }

  public employeeData(value: any){
    console.log(value);
  }

}
