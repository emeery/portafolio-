import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  bar: boolean = false;
  constructor(
    private servicioAut: AuthService,
    private formBuilder: FormBuilder,
    private dlgRef: MatDialogRef<LoginComponent>
  ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit() {}

  get f() {
    return this.form.controls;
  }

  ingreso() {
    this.bar = true;
    setTimeout(
      () => this.servicioAut.iniciarSesion(this.form.value.email),
      1500
    );
    setTimeout(() => this.dlgRef.close(), 1000);
  }
}
