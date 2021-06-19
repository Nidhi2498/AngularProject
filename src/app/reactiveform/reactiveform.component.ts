import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../common.service';
import { Student } from '../student.model';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
 
  students: FormGroup;
    
  constructor(private fb: FormBuilder, private commonService: CommonService)
  {
    this.students=this.fb.group({
      name:['', [Validators.required]],
      rollno:['',[Validators.pattern(/^[0-9]\d*$/)]],
      address:[''],
      skill: this.fb.array([
        this.skillGroup()
      ]),
      })
  }

  public skillGroup(){
    return new FormGroup({
      title1: new FormControl(),
      title2:new FormControl()
    })
  }

  getskillarray(){
    return this.students.get('skill') as FormArray
  }

  addskillgroup(){
    const addskill = this.students.get('skill') as FormArray
    addskill.push(this.skillGroup())
  }

  onSubmit(){
    
    console.log(this.students.value)

  }

 
  public getStudent(){
  
  }

  

  ngOnInit(): void {

  }

}
