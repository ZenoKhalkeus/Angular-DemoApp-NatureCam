import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PhotoModule } from './photo/photo.module';
import { SharedModule } from './shared/shared.module';
import { AdsComponent } from './ads/ads.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    PhotoModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
