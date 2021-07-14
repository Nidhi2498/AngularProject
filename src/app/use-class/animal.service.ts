import { Injectable } from '@angular/core';

@Injectable()
export class AnimalService {
  public name = 'animal';
  public food = 'food';

  public getName(){
    return this.name;
  }

  public getFood(){
    return this.food;  
  }
  constructor() { }
}
