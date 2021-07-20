import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewContainerRefRoutingModule } from './view-container-ref-routing.module';
import { ViewContainerRefComponent } from './view-container-ref.component';
import { GuestCardComponent } from './guest-card/guest-card.component';
import { ProfileComponent } from './profile/profile.component';
import { UserCardComponent } from './user-card/user-card.component';
import { ProfileService } from './profile.service';
import { ProfileHostDirective } from './profile-host.directive';


@NgModule({
  declarations: [
    ViewContainerRefComponent,
    GuestCardComponent,
    ProfileComponent,
    UserCardComponent,
    ProfileHostDirective
  ],
  imports: [
    CommonModule,
    ViewContainerRefRoutingModule
  ],
  providers: [ProfileService]
})
export class ViewContainerRefModule { }
