import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonService } from './common.service';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { AddformComponent } from './reactiveform/addform/addform.component';


@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
    ProductCreateComponent,
    ProductDetailsComponent,
    ProductListComponent,
    ReactiveformComponent,
    AddformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '**',
        component:Child2Component
      }
    ])
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { 



}
