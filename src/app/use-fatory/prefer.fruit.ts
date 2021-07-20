import { InjectionToken } from "@angular/core";
import { Fruit } from "./fruit";
import { ServiceService } from "./service.service";


export const PREFERRED_FRUIT = new InjectionToken<string>('fruit name');

export function preferredFruitFactory(count:number){
    return (myfruit:Fruit, fruitservice:ServiceService): string => {
        return fruitservice
            .getallFruits()
            .filter(fruit => fruit.name === myfruit.name)
            .map(fruit => fruit.name)
            .slice(0, Math.max(0, count))
        .join('|');
   };
};
