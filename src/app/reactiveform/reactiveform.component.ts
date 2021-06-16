import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Student } from '../student.model';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
 
  students: FormGroup;
    
  constructor(private fb: FormBuilder)
  {
    this.students=this.fb.group({
      name:['', [Validators.required]],
      rollno:['',[Validators.pattern(/^[0-9]\d*$/)]],
      address:[''],
      skill: this.fb.group({
        title1:[],
        title2:[]
      }),
      addskillgroup(){}
      })
  }

  skillGroup(){
    return this.fb.group({
      title1:[],
      title2:[]
    })
  }

  addskillgroup(){
    const addskill = this.students.get('skill') as FormArray
    addskill.push(this.skillGroup())
  }

  onSubmit(){
    console.log(this.students.value)

  }
  

  ngOnInit(): void {

  }

}
