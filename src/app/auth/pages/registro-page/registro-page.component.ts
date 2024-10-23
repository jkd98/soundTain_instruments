import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-page',
  templateUrl: './registro-page.component.html',
  styleUrls: ['./registro-page.component.css']
})
export class RegistroPageComponent implements OnInit {
  personalFormGroup!: FormGroup;
  securityFormGroup!: FormGroup;
  additionalFormGroup!: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

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
      rol: [{ value: 'Cliente', disabled: true }] // Campo 'rol' deshabilitado
    });
  }

  onSubmit(): void {
    const formData = {
      ...this.personalFormGroup.value,
      ...this.securityFormGroup.value,
      ...this.additionalFormGroup.getRawValue(), // getRawValue() para obtener campos deshabilitados
    };
    console.log('Datos del formulario:', formData);
  }
}
