import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Producto } from '../../../shared/interfaces/producto';
import { ProductoService } from '../../../shared/services/producto.service';


@Component({
  selector: 'app-producto-admin',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent  {

  producto: Producto | null = null;
  productoFormulario!: FormGroup

  constructor(
    private productosService: ProductoService,
    private fb: FormBuilder
  ) {
    // Definicion del formulario con los controles necesarios
    this.productoFormulario = this.fb.group({
      nombre:[''],
      descripcion: [''],
      categoria: [''],
      precio: [0],
      cantidad: [0],
      estante: [''],
      seccionEstante: [''],
      imagen: ['']
    })
  }
  

  ngOnInit() {
    // Suscribirse a `producto$` para obtener los datos del producto
    /* this.productosService.(producto => {
      if (producto) {
        this.producto = producto;
        this.productoFormulario.patchValue(producto);
      }
    }) */
  }

  // Método para enviar los datos actualizados
  onSubmit() {
    if (this.productoFormulario.valid) {
      const updatedProducto = this.productoFormulario.value
      console.log('Datos de producto actualizados:', updatedProducto)
      // Aquí se puede enviar el producto actualizado al servicio
    }
  }

  cerrarVentana(){
    //this.productosService.setModificando(false);
  }
 
}
