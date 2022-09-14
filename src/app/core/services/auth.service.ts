import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map } from 'rxjs';
import { environment } from '../../../environments/environment.prod';
import { TokenStorageService } from './token-storage.service';

const BACKEND_URL = environment.API_URL + '/auth/';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private token!: string;
  private registrado = false;
  private registroSubject = new BehaviorSubject<boolean>(false);
  private despedida = false;
  constructor(
    private http: HttpClient,
    private router: Router,
    private servicioStorage: TokenStorageService
  ) {}

  obtieneToken() {
    return this.token;
  }

  estaRegistrado() {
    return this.registrado;
  }

  obtieneDespedida() {
    return this.despedida;
  }

  registroListener() {
    return this.registroSubject.asObservable();
  }

  comprobarDatosUsuario(): void {
    // inicia cuando carga la aplicación
    const datosAut = this.servicioStorage.obtieneStorage;
    console.log('datosaut',datosAut)
    if (!datosAut) return;
    const token = datosAut.token;
    if (token) {
      this.token = datosAut.token;
      this.registrado = true;
      this.registroSubject.next(true);
    }
  }

  iniciarSesion(user: string) {
    return this.http
      .post(BACKEND_URL + 'signin', user)
      .pipe(
        map((user) => {
          return user;
        })
      )
      .subscribe({
        next: (c: any) => {
          console.log('cc',c)
          const token = c['token'];
          if (token) {
            this.registrado = true;
            this.despedida = true;
            this.servicioStorage.saveToken(token);
            this.registroSubject.next(true);
          }
          this.router.navigate(['/profile/about']);
        },
        error: (e) => this.registroSubject.next(false),
      });
  }

  cerrarSesion(): void {
    this.token = '';
    this.registrado = false;
    this.registroSubject.next(false);
    this.servicioStorage.limpiarStorage();
    this.router.navigate(['/page-start']);
  }
}
