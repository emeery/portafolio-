import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'app/core/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  bar: boolean = false;
  constructor(
    private servicioAut: AuthService,
    private formBuilder: FormBuilder,
    private dlgRef: MatDialogRef<SignupComponent>
  ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  get f() {
    return this.form.controls;
  }

  registro() {
    this.bar = true;
    setTimeout(
      () => 
        {this.servicioAut.registro(this.form.value)},
      1500
    );
    this.dlgRef.close();
  }

}
