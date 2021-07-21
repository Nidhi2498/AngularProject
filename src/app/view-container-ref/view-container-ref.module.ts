import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewContainerRefRoutingModule } from './view-container-ref-routing.module';
import { ViewContainerRefComponent } from './view-container-ref.component';
import { GuestCardComponent } from './guest-card/guest-card.component';
import { ProfileComponent } from './profile/profile.component';
import { UserCardComponent } from './user-card/user-card.component';
import { ProfileService } from './profile.service';
import { ProfileHostDirective } from './profile-host.directive';
import { AlertComponent } from './alert/alert.component';


@NgModule({
  declarations: [
    ViewContainerRefComponent,
    GuestCardComponent,
    ProfileComponent,
    UserCardComponent,
    ProfileHostDirective,
    AlertComponent
  ],
  imports: [
    CommonModule,
    ViewContainerRefRoutingModule
  ],
  providers: [ProfileService],
  entryComponents: [AlertComponent]
})
export class ViewContainerRefModule { }
