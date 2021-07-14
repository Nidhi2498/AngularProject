import { Injectable } from '@angular/core';
import { AnimalService } from './animal.service';

@Injectable()
export class CowService extends AnimalService{
  public name = 'cow';
  public food = 'grass';

  constructor() { 
    super();
  }
}
