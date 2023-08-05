import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentPhotoComponent } from './current-photo/current-photo.component';
import { PhotoRoutingModule } from './photo-routing.module';
import { SearchComponent } from './search/search.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"




@NgModule({
  declarations: [
    CurrentPhotoComponent,
    SearchComponent
  ],
  imports: [
    CommonModule, PhotoRoutingModule, SharedModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class PhotoModule { }
