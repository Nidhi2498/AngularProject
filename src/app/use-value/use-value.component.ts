import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { Book } from './book';

const book = new Book('Angular')
export const message = new InjectionToken<any>('Hi'); 
@Component({
  selector: 'app-use-value',
  templateUrl: './use-value.component.html',
  styleUrls: ['./use-value.component.css'],
  providers:[
    { //using class
      provide:Book, useValue:book
    },
    { //direct inject
      provide:message, useValue:'hello'
    }
  ]
})
export class UseValueComponent implements OnInit {

  constructor(public book:Book, @Inject(message) public message:any) { }

  ngOnInit(): void {
  }

}
