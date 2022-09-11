import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../components/shared/shared.module';



@NgModule({
  
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule,
    MaterialModule,
  ],
//   providers: [
//     { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
//   ],
  declarations: [
    // AppToolbarComponent,
    // PageProfileComponent,
    // PageStartComponent,
    // PortafolioComponent,
    // ContactComponent,
    // AboutComponent
  ],
  exports: [
    // AppToolbarComponent,
    // PageProfileComponent,
    // PageStartComponent,
    // PortafolioComponent,
    // ContactComponent,
    // AboutComponent
  ]
})
export class CoreModule { }
