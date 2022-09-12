import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'portafolio'
  registrado= false
  constructor(
    private servicioAut: AuthService,
  ) {}

  ngOnInit() {
    this.servicioAut.comprobarDatosUsuario()
  }

  getRegistro() {
    this.servicioAut.registroListener()
    .subscribe(res => {
      this.registrado = res;
    })
  }
}
