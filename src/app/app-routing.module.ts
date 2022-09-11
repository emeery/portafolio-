import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
import { PageStartComponent } from './pages/page-start/page-start.component';
import { PageAboutComponent } from './pages/page-about/page-about.component';
import { PageCurriculumComponent } from './pages/page-curriculum/page-curriculum.component';
import { PageContactComponent } from './pages/page-contact/page-contact.component';
import { AuthGuard } from './core/guards/aut.guard';
import { ProfileComponent } from './pages/profile/profile.component';


const rutas: Routes = [
  { path: '', redirectTo: 'page-start', pathMatch: 'full' },
  { path: 'page-start', component: PageStartComponent },
  {
    path: 'profile',
    canActivate: [AuthGuard],
    component: ProfileComponent,
    children: [
      {
        path: 'about',
        component: PageAboutComponent,
      },
      {
        path: 'curriculum',
        component: PageCurriculumComponent
      },
      {
        path: 'contact',
        component: PageContactComponent,
      },
    ]
  },  
  {
    path: 'auth',
    loadChildren: () =>
      import('./components/auth/auth.module').then(
        (m) => m.AuthModule
      ),
  },
  { path: '**', redirectTo: 'page-start' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(rutas, { preloadingStrategy: PreloadAllModules, }),
  ],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
