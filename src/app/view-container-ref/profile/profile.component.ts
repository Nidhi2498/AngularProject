import { Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { mergeMap, takeUntil} from 'rxjs/operators';
import { AlertComponent } from '../alert/alert.component';
import { ProfileHostDirective } from '../profile-host.directive';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
  @ViewChild(ProfileHostDirective, { static: true })  public profileHost!: ProfileHostDirective; 
  private destroySubject = new Subject();
  componentRef!: ComponentRef<AlertComponent>;
  @ViewChild("alertContainer", {read:ViewContainerRef, static: true}) container: any;

  constructor(private profileService: ProfileService, private resolve:ComponentFactoryResolver) { }
 
  ngOnInit(): void {
    const viewContainerRef = this.profileHost.viewContainerRef;

    this.profileService.isloggedIn$.
    pipe(
      takeUntil(this.destroySubject),
      mergeMap(isloggedIn => 
      this.profileService.loadComponent(viewContainerRef, isloggedIn)
    )
    ).subscribe();
  }

  public createComponent(type:any){
    const factory: ComponentFactory<AlertComponent> = this.resolve.resolveComponentFactory(AlertComponent);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.type = type;
    this.componentRef.instance.OnDestroy.subscribe(event =>
      console.log(event))
  }

  ngOnDestroy(): void {
    this.destroySubject.next();
    this.destroySubject.complete();
  }

  

}
