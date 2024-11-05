import { Component, Input } from '@angular/core';
import { AdminProductos } from '../../admin-productos';
import { Producto } from '../../../shared/interfaces/producto';
import { ProductoService } from '../../../shared/services/producto.service';


@Component({
  selector: 'app-producto-admin',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {

  producto: Producto | null = null;

  constructor(private productosService: ProductoService) {}

  ngOnInit() {
    // Suscribirse a `producto$` para obtener los datos del producto
    this.productosService.producto$.subscribe(value => {
      this.producto = value; // Asigna directamente el producto único
      console.log('Producto:', this.producto);
    });
  }

  cerrarVentana(){
    this.productosService.setModificando(false);
  }
 
}
