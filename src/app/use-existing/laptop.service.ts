import { Injectable } from '@angular/core';
import { Computer } from './computer';

@Injectable()
export class LaptopService implements Computer {

  constructor() { }
  getComputerName():any {
    return 'Laptop';
  }
}
