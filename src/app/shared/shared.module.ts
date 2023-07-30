import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimePipePipe } from './time-pipe.pipe';



@NgModule({
  declarations: [
    TimePipePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [TimePipePipe]
})
export class SharedModule { }
