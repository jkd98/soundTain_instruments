import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../shared/interfaces/producto';
import { ProductoService } from '../../../shared/services/producto.service';
import { Filtro } from '../../../shared/interfaces/filtro';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-instrumentos-general',
  templateUrl: './instrumentos-general.component.html',
  styleUrl: './instrumentos-general.component.css'
})
export class InstrumentosGeneralComponent implements OnInit {

  public productos: Producto[] = [];
  public filtroForm!: FormGroup;

  constructor(
    private productoService: ProductoService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    // Inicializa el formulario reactivo
    this.filtroForm = this.fb.group({
      categoria: [''],
      precioMin: [''],
      precioMax: [''],
      nombre: ['']
    });
    
    this.aplicarFiltros();
    
  }
  
  aplicarFiltros() {
    const filtros = this.filtroForm.value;
    this.productoService.getProductosFiltrados(filtros)
      .subscribe(resp => {
        this.productos = resp.data;
        console.log(resp);
        console.log(this.productos);
      });
  }

}