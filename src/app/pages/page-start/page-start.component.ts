import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/core/services/auth.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-page-start',
  templateUrl: './page-start.component.html',
  styleUrls: ['./page-start.component.scss'],
})
export class PageStartComponent implements OnInit {
  todos: string[] = [
    'bun venit',
    'bienvenue',
    '歡迎',
    'welcome',
    'welkom',
    'benvenuto',
    'fáilte',
    'bienvenido',
    'a',
    'mi',
    'portafalio',
    ':)',
  ];
  saludo!: string;
  despido = false;
  despidoSub = Subscription;
  constructor(private servicioAut: AuthService) {}

  ngOnInit() {
    this.checaSaludo();
  }

  checaSaludo() {
    this.despido = this.servicioAut.obtieneDespedida();
    console.log(this.despido);
    if (this.despido) {
      this.saludo = 'vuelve pronto!';
    } else this.bienvenida();
  }

  despedida() {
    this.saludo = 'vuelve pronto!';
  }

  bienvenida() {
    const source = interval(500);
    const subscribe = source.subscribe((i) => {
      this.saludo = this.todos[i];
    });
    setTimeout(() => subscribe.unsubscribe(), 6500);
  }
}
