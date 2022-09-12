import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
  } from '@angular/common/http';
  import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
  
  // intercepta la solicitud y agrega el token en el header authorization
  @Injectable()
  export class AuthInterceptor implements HttpInterceptor {
    constructor(private servicioAut: AuthService) {}
    intercept(req: HttpRequest<any>, next: HttpHandler) { // Observable HttpEvent<any>
      const jwt = this.servicioAut.obtieneToken()
      const authSolicitud = req.clone({
        headers: req.headers.set('authorization', 'Bearer ' + jwt)
      });
      return next.handle(authSolicitud);
    }
  }
  