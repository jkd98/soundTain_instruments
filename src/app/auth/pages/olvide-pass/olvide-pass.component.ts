import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-olvide-pass',
  templateUrl: './olvide-pass.component.html',
  styleUrl: '/src/app/auth/pages/login-pages/login-pages.component.css'
})
export class OlvidePassComponent {
  public recuForm: FormGroup;


  constructor(private fb: FormBuilder, private router:Router, private authService:AuthService) {
    this.recuForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.recuForm.valid) {
      console.log('Formulario válido:', this.recuForm.value);
      const email = this.recuForm.get('email')!.value;
      // Aquí puedes enviar los datos del formulario, por ejemplo, a un servicio
      console.log(email);
      //this.authService.(email);
      this.router.navigate(['/auth/nueva-pass']);
    } else {
      console.log('Formulario no válido');
    }
  }

}
