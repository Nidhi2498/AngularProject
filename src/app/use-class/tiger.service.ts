import { Injectable } from '@angular/core';
import { AnimalService } from './animal.service';

@Injectable()
export class TigerService extends AnimalService {
  public name = 'tiger';
  public food = 'meat';

  constructor() {
    super();
   }
}
