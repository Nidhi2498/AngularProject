import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { mergeMap, takeUntil} from 'rxjs/operators';
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

  constructor(private profileService: ProfileService) { }
 
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

  ngOnDestroy(): void {
    this.destroySubject.next();
    this.destroySubject.complete();
  }

}
