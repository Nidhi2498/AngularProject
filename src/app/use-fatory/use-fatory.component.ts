import { Component, Inject, OnInit } from '@angular/core';
import { Fruit } from './fruit';
import { preferredFruitFactory, PREFERRED_FRUIT } from './prefer.fruit';
import { ServiceService } from './service.service';

const myfruit = new Fruit('orange');

@Component({
  selector: 'app-use-fatory',
  templateUrl: './use-fatory.component.html',
  styleUrls: ['./use-fatory.component.css'],
  providers: [
    ServiceService,
    {
      provide: Fruit, useValue:myfruit
    },
    { 
      provide: PREFERRED_FRUIT,
      useFactory: preferredFruitFactory(4),
      deps: [Fruit, ServiceService]
    }
  ]
})

export class UseFatoryComponent implements OnInit {
  
  constructor( @Inject(PREFERRED_FRUIT) public preferredFruit:string
  )
   {   }

  ngOnInit(): void {
  }

}
