import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../components/shared/shared.module';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ProfileComponent } from '../pages/profile/profile.component';
import { PageStartComponent } from '../pages/page-start/page-start.component';
import { PageAboutComponent } from '../pages/page-about/page-about.component';
import { PageCurriculumComponent } from '../pages/page-curriculum/page-curriculum.component';
import { PageContactComponent } from '../pages/page-contact/page-contact.component';



@NgModule({
  
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
    MaterialModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  declarations: [
    ProfileComponent,
    PageStartComponent,
    PageAboutComponent,
    PageCurriculumComponent,
    PageContactComponent
  ],
  exports: [
    ProfileComponent,
    PageStartComponent,
    PageAboutComponent,
    PageCurriculumComponent,
    PageContactComponent
  ]
})
export class CoreModule { }
