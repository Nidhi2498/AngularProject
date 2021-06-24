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
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
// import { App1RoutingModule } from './app1-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
    ReactiveformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    // RouterModule.forRoot([
    //   {
    //     path: '**',
    //     component:Child2Component
    //   }
    // ])
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { 



}
