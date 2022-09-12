import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MaterialModule } from './core/material.module';
import { SharedModule } from './components/shared/shared.module';
import { AuthModule } from './components/auth/auth.module';
import { CoreModule } from './core/core.module';
import { PageStartComponent } from './pages/page-start/page-start.component';
import { PageContactComponent } from './pages/page-contact/page-contact.component';
import { PageAboutComponent } from './pages/page-about/page-about.component';
import { PageCurriculumComponent } from './pages/page-curriculum/page-curriculum.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    AppRoutingModule,
    CoreModule,
    AuthModule,
    SharedModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
