import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/core/material.module';
import { AppProgressBarComponent } from './app-progress-bar/app-progress-bar.component';



@NgModule({
  declarations: [AppProgressBarComponent],
  imports: [
    CommonModule, 
    MaterialModule
  ],
  exports: []
})
export class SharedModule { }
