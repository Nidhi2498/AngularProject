import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { ExamplerxjsComponent } from './examplerxjs.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';

const routes: Routes = 
[
  { path: '', 
    component: ExamplerxjsComponent, 
  },
  { path: 'switchmap',
        component: SwitchMapComponent
  },
  { 
    path: 'concatmap',
    component:ConcatMapComponent
  },
  { 
    path : 'combinelatest',
    component:ConcatMapComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamplerxjsRoutingModule { }
