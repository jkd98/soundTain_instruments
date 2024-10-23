import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-pages',
  templateUrl: './login-pages.component.html',
  styleUrl: './login-pages.component.css'
})
export class LoginPagesComponent {

  public loginForm!: FormGroup;


  constructor(private fb: FormBuilder, private router:Router, private authService:AuthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      pass: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Formulario válido:', this.loginForm.value);
      const email = this.loginForm.get('email')!.value;
      const pass = this.loginForm.get('pass')!.value;
      // Aquí puedes enviar los datos del formulario, por ejemplo, a un servicio
      this.authService.autenticarUsusrio(email,pass);
    } else {
      console.log('Formulario no válido');
    }
  }

}
