import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nueva-pass',
  templateUrl: './nueva-pass.component.html',
  styleUrl: '/src/app/auth/pages/login-pages/login-pages.component.css'
})
export class NuevaPassComponent {
  public nwPassForm: FormGroup;
  public titulo: string = 'Restablece tu contraseña';
  public msg: string = 'Hemos enviado un email con las instrucciones';
  public enlace: string = 'Inicio';
  public url: string = '/clientes/inicio';
  private valid = false; // si hay id?

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService, private activatedRoute: ActivatedRoute) {
    this.nwPassForm = this.fb.group({
      pass: ['', Validators.required]
    });
  }

  getValid(): boolean {
    return this.valid;
  }

  ngOnInit(): void {
    let id: string | null = null;

    this.activatedRoute.params
      .subscribe(params => {
        id = params['tkn'];
      }
      );

    console.log(id);

    if (id) {
      this.titulo = 'Cuenta confirmada';
      this.msg = 'La cuenta se confirmo correctamente, ¡ya puedes iniciar sesión!';
      this.enlace = 'Iniciar Sesión';
      this.url = '/auth/login';
      //comprobar token
      this.valid = true;
      console.log(this.getValid());
    }


  }
  onSubmit() {
    this.valid = false;

    if (this.nwPassForm.valid && this.valid) {
      console.log('Formulario válido:', this.nwPassForm.value);
      const pass = this.nwPassForm.get('pass')!.value;
      // Aquí puedes enviar los datos del formulario, por ejemplo, a un servicio
      console.log(pass);
      //this.authService.(email);
    } else {
      this.msg = 'Formulario no válido';
      return;
    }
  }
}
