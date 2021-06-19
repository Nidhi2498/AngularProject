import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Student } from 'src/app/student.model';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.css']
})
export class AddformComponent implements OnInit {

  public student:Student={
    name:'abc',
    rollno:12,
    address:'daman',
    skill:[{title:'playing', certification:"Interschool competition"}]

  }

  submitted = false;
  constructor( private service:ProductService) { }
  addStudent(){
    this.service.addStudent(this.student).subscribe(data =>{
    this.student = data
    });
  }
  

  ngOnInit(): void {
  }

}

