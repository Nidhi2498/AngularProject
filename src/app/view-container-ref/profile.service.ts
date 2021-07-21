import { ComponentFactoryResolver, Injectable, ViewContainerRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { GuestCardComponent } from './guest-card/guest-card.component';
import { UserCardComponent } from './user-card/user-card.component';

@Injectable()
export class ProfileService {
  private isloggedIn= new BehaviorSubject(false);
  public isloggedIn$ = this.isloggedIn.asObservable();
  constructor(private cfr : ComponentFactoryResolver) { }

  public login(){
    this.isloggedIn.next(true);
  }

  public logout(){
    this.isloggedIn.next(false);
  }

  async loadComponent(viewContainer: ViewContainerRef, isloggedIn:boolean){
      //import Guest card component 
      const guest = await import('./guest-card/guest-card.component');
      const user = await import('./user-card/user-card.component');

      viewContainer.clear();

      let viewComponent:any  = isloggedIn? UserCardComponent: GuestCardComponent;

      return viewContainer.createComponent(
        this.cfr.resolveComponentFactory(viewComponent)
      )
  }
}
