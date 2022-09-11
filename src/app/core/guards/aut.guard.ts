import {
    CanActivate,
    Router
  } from '@angular/router';
  import { Observable } from 'rxjs';
  import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
  @Injectable()
  export class AuthGuard implements CanActivate {
    constructor(
      private servicioAut: AuthService,
      private router: Router
    ) { }
    canActivate(): boolean | Observable<boolean> | Promise<boolean> {
      const registrado = this.servicioAut.estaRegistrado()
      if (!registrado) {
        this.router.navigate(['/'])
      }
      return registrado
    }
  }
  