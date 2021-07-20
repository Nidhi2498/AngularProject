import { Component, InjectionToken, Inject, OnInit } from '@angular/core';
import { Fruit } from './fruit';
import { preferredFruitFactory, PREFERRED_FRUIT } from './prefer.fruit';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-use-fatory',
  templateUrl: './use-fatory.component.html',
  styleUrls: ['./use-fatory.component.css'],
  providers: [
    ServiceService,
    { 
      provide: PREFERRED_FRUIT,
      useFactory: preferredFruitFactory(3),
      deps: [Fruit, ServiceService]
    }
  ]
})
export class UseFatoryComponent implements OnInit {
  fruitName!:any;
  constructor( private service:ServiceService,
    @Inject(PREFERRED_FRUIT) public preferredFruit:any)
    {
      debugger
   }

  ngOnInit(): void {
  
    this.fruitName = this.service.getallFruits();
  }

}
