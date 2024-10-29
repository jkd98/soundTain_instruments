import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.css'
})
export class BusquedaComponent {
  busquedaForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.busquedaForm = this.fb.group({
      busqueda: [''] // Inicializa el control
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const valorBusqueda = this.busquedaForm.get('busqueda')?.value;
    console.log('Valor de búsqueda:', valorBusqueda);
  }
}
