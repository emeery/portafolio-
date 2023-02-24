import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'app/core/material.module';
import { AppProgressBarComponent } from './app-progress-bar/app-progress-bar.component';
import { AppToolbarComponent } from './app-toolbar/app-toolbar.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [AppToolbarComponent, AppProgressBarComponent, ErrorComponent],
  imports: [CommonModule, MaterialModule],
  exports: [AppToolbarComponent, AppProgressBarComponent],
})
export class SharedModule {}
