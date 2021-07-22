import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CdkexampleRoutingModule } from './cdkexample-routing.module';
import { CdkexampleComponent } from './cdkexample.component';
import { DragDropexampleComponent } from './drag-dropexample/drag-dropexample.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { LayoutModule} from '@angular/cdk/layout';
import { OverlayModule} from '@angular/cdk/overlay';
import { LayoutComponent } from './layout/layout.component';
import { PlatformModule} from '@angular/cdk/platform';
import { PortalModule} from '@angular/cdk/portal';
import { ScrollingModule} from '@angular/cdk/scrolling';
import { CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import { OverlayComponent } from './overlay/overlay.component';
import { PlatformComponent } from './platform/platform.component';
import { PortalComponent } from './portal/portal.component';
import { ScrollingComponent } from './scrolling/scrolling.component';
import { TableComponent } from './table/table.component';
import { TreeComponent } from './tree/tree.component';
import {MatIconModule} from '@angular/material/icon'


@NgModule({
  declarations: [
    CdkexampleComponent,
    DragDropexampleComponent,
    LayoutComponent,
    OverlayComponent,
    PlatformComponent,
    PortalComponent,
    ScrollingComponent,
    TableComponent,
    TreeComponent
  ],
  imports: [
    CommonModule,
    CdkexampleRoutingModule,
    DragDropModule, LayoutModule, OverlayModule, PlatformModule, PortalModule, ScrollingModule,
    CdkTableModule, CdkTreeModule, MatIconModule
  ]
})
export class CdkexampleModule { }
