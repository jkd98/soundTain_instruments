import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


interface Msg {
  title: string;
  msg: string;
}

@Component({
  selector: 'app-registro-page',
  templateUrl: './registro-page.component.html',
  styleUrls: ['./registro-page.component.css']
})


export class RegistroPageComponent implements OnInit {
  personalFormGroup!: FormGroup;
  securityFormGroup!: FormGroup;
  additionalFormGroup!: FormGroup;
  public msg:Msg = {title:'',msg:''};

  constructor(private _formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.personalFormGroup = this._formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });

    this.securityFormGroup = this._formBuilder.group({
      pass: ['', Validators.required],
    });

    this.additionalFormGroup = this._formBuilder.group({
      phone: [''],
    });
  }

  onSubmit(): void {
    const formData = {
      ...this.personalFormGroup.value,
      ...this.securityFormGroup.value,
      ...this.additionalFormGroup.getRawValue(), // getRawValue() para obtener campos deshabilitados
    };
    console.log('Datos del formulario:', formData);
    this.msg.title = 'Cuenta creada correctamente';
    this.msg.msg = 'Hemos enviado un email de confirmación, presiona el enlace';
    setTimeout(() => {
      this.router.navigate(['/auth/msg']);
    }, 1000);

  }
}
