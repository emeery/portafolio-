import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { TokenStorageService } from './token-storage.service';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, AuthCredential, OAuthCredential } from '@angular/fire/auth';
import { MatDialog } from '@angular/material/dialog';
import { ErrorComponent } from 'app/components/shared/error/error.component';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private token!: string;
  private registrado = false;
  private registroSubject = new BehaviorSubject<boolean>(false);
  private despedida = false;
  constructor(
    private router: Router,
    private servicioStorage: TokenStorageService,
    private auth: Auth,
    private dlg: MatDialog
  ) { }

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


  ingreso({ email, password }: any) {
    // signInWithEmailAndPassword(this.auth, email, password).then((res: any) => {
    //   const token: any = res['user']['accessToken'];
    //   if (token) {
    //     this.registrado = true;
    //     this.despedida = true;
    //     this.servicioStorage.saveToken(token);
    //     this.registroSubject.next(true);
    //   }
    //   this.router.navigate(['/profile/about']);
    // }).catch((e) => {
    //   this.dlg.open(ErrorComponent,
    //     { data: { title: 'Verifica tus credenciales', subtitle: '' } }
    //   );
    // })

  }

  registro({ email, password }: any) {
    createUserWithEmailAndPassword(this.auth, email, password).then((res: any) => {
      let token = res['user']['accessToken']
      if (token) {
        this.registrado = true;
        this.despedida = true;
        this.servicioStorage.saveToken(token);
        this.registroSubject.next(true);
      }
      this.router.navigate(['/profile/about']);

    }).catch((e) => {
      this.dlg.open(ErrorComponent,
        { data: { title: 'Hubo un error', subtitle: 'intenta con otro correo' } }
      );

    })

  }


  cerrarSesion(): void {
    this.token = '';
    this.registrado = false;
    this.registroSubject.next(false);
    this.servicioStorage.limpiarStorage();
    this.router.navigate(['/page-start']);
  }
}
