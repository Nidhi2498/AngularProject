import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CdkexampleComponent } from './cdkexample.component';
import { DragDropexampleComponent } from './drag-dropexample/drag-dropexample.component';
import { LayoutComponent } from './layout/layout.component';
import { OverlayComponent } from './overlay/overlay.component';
import { PlatformComponent } from './platform/platform.component';
import { PortalComponent } from './portal/portal.component';
import { ScrollingComponent } from './scrolling/scrolling.component';
import { TableComponent } from './table/table.component';
import { TreeComponent } from './tree/tree.component';

const routes: Routes = [
  { 
    path: '', component: CdkexampleComponent,
    children: [
      {
        path: 'dragdrop',
        component: DragDropexampleComponent
      },
      {
        path: 'layout',
        component: LayoutComponent
      },
      {
        path: 'overlay',
        component: OverlayComponent
      },
      { 
        path:'platform',
        component: PlatformComponent
      },
      { 
        path:'portal',
        component: PortalComponent
      },
      { 
        path:'scrolling',
        component: ScrollingComponent
      },
      { 
        path:'table',
        component: TableComponent
      },
      {
        path:'tree',
        component: TreeComponent
      }
    ]
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CdkexampleRoutingModule { }
