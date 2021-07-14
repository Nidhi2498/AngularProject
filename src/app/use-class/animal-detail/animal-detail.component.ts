import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.css']
})
export class AnimalDetailComponent implements OnInit {
  name! : string;
  food! : string;
  constructor(private animal:AnimalService) { }

  ngOnInit() {
    this.name = this.animal.getName();
    this.food = this.animal.getFood();
  }

}
