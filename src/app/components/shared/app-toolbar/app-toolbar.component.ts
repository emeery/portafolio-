import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { AuthService } from 'app/core/services/auth.service';
import { LoginComponent } from '../../auth/login/login.component';
import { SignupComponent } from 'app/components/auth/signup/signup.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './app-toolbar.component.html',
  styleUrls: ['./app-toolbar.component.scss'],
})
export class AppToolbarComponent implements OnInit, OnDestroy {
  icon!: string;
  github!: string
  registrado = false;
  private registradoSub!: Subscription;
  constructor(private servicioAut: AuthService, private dlg: MatDialog) {}

  ngOnInit() {
    this.icon = 'assets/icons/watermelon.png';
    this.github = 'assets/icons/github.png';
    this.registrado = this.servicioAut.estaRegistrado();
    this.servicioAut.registroListener().subscribe((res) => {
      this.registrado = res;
      console.log('registrado', this.registrado);
    });
  }

  ingresar() {
    this.dlg.open(LoginComponent);
  }

  registrar() {
    this.dlg.open(SignupComponent)
  }
  

  desloguear() {
    this.servicioAut.cerrarSesion();
  }

  ngOnDestroy() {
    this.registradoSub.unsubscribe();
  }
}
