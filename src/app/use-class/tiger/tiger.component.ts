import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../animal.service';
import { TigerService } from '../tiger.service';

@Component({
  selector: 'app-tiger',
  templateUrl: './tiger.component.html',
  styleUrls: ['./tiger.component.css'],
  providers:[{
    provide:AnimalService,
    useClass: TigerService,
  }]
})
export class TigerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
