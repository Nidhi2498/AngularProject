import { Injectable } from '@angular/core';
import { Fruit } from './fruit';

export const fruit:Fruit[] = [
  { "name" : "apple" },
  {  "name" : "orange"}, 
  { "name" : "mango"},
  { "name" : "pineapple"}
];


@Injectable()
export class ServiceService {
  //get all fruit name
  getallFruits(): Fruit[]{
    return fruit;
  }
}
