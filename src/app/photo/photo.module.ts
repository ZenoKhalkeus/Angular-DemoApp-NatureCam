import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentPhotoComponent } from './current-photo/current-photo.component';
import { PhotoRoutingModule } from './photo-routing.module';





@NgModule({
  declarations: [
    CurrentPhotoComponent
  ],
  imports: [
    CommonModule, PhotoRoutingModule
  ]
})
export class PhotoModule { }
