import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../animal.service';
import { CowService } from '../cow.service';

@Component({
  selector: 'app-cow',
  templateUrl: './cow.component.html',
  styleUrls: ['./cow.component.css'],
  providers:[
    {
      provide: AnimalService,
      useClass: CowService,
    }
  ]
})
export class CowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
