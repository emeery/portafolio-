import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/core/material.module';
import { AppProgressBarComponent } from './app-progress-bar/app-progress-bar.component';
import { AppToolbarComponent } from './app-toolbar/app-toolbar.component';

@NgModule({
  declarations: [AppToolbarComponent, AppProgressBarComponent],
  imports: [CommonModule, MaterialModule],
  exports: [AppToolbarComponent, AppProgressBarComponent],
})
export class SharedModule {}
