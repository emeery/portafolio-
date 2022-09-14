import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'app/core/services/auth.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  registrado = false;
  bar = true;
  constructor(private servicioAut: AuthService, private snack: MatSnackBar) {}

  ngOnInit() {
    this.servicioAut.registroListener().subscribe((res: any) => {
      this.registrado = res;
    });
    this.openSnackBar();
  }

  openSnackBar() {
    this.snack.open('Bienvenido a mi portafolio!', 'X', {
      duration: 5000,
      panelClass: ['black-snackbar'],
    });
  }

  hideBar() {
    this.bar = !this.bar;
  }
}
