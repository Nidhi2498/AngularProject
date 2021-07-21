import { Injectable } from '@angular/core';
import { Fruit } from './fruit';

 const fruits:Fruit[] = [
  { "name" : "apple" },
  {  "name" : "orange"}, 
  { "name" : "mango"},
  { "name" : "pineapple"},
  { "name": "orange"},
  { "name": "pineapple"},
  { "name" : "orange"},
  { "name" : "orange"},
];


@Injectable()
export class ServiceService {
  //get all fruit name
  getallFruits(): Fruit[]{
    return fruits;
  }
}
