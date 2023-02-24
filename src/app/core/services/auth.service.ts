import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { TokenStorageService } from './token-storage.service';
import { Auth,createUserWithEmailAndPassword } from '@angular/fire/auth';

const  BACKEND_URL = environment;

@Injectable({ providedIn: 'root' })
export class AuthService {
  private token!: string;
  private registrado = false;
  private registroSubject = new BehaviorSubject<boolean>(false);
  private despedida = false;
  constructor(
    private http: HttpClient,
    private router: Router,
    private servicioStorage: TokenStorageService,
    private auth: Auth
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
    if (!datosAut) return;
    const token = datosAut.token;
    if (token) {
      this.token = datosAut.token;
      this.registrado = true;
      this.registroSubject.next(true);
    }
  }

  ingreso(user: string) {
    console.log('usrr', user);
    return this.http
      .post(BACKEND_URL.API_SIGNIN, user)
      .subscribe({
        next: (c: any) => {
          console.log('cc',c)
          // const token = c['idToken'];
          // if (token) {
          //   this.registrado = true;
          //   this.despedida = true;
          //   this.servicioStorage.saveToken(token);
          //   this.registroSubject.next(true);
          // }
          // this.router.navigate(['/profile/about']);
        },
        error: (e) => this.registroSubject.next(false),
      });
  }

  registro({email, password}: any) {
    return createUserWithEmailAndPassword(this.auth, email, password)
    
  }

  cerrarSesion(): void {
    this.token = '';
    this.registrado = false;
    this.registroSubject.next(false);
    this.servicioStorage.limpiarStorage();
    this.router.navigate(['/page-start']);
  }
}
