import { Component } from '@angular/core';
import { AdminProductos } from '../../admin-productos';
import { ProductoService } from '../../../shared/services/producto.service';
import { Producto } from '../../../shared/interfaces/producto';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
  constructor(private productosService: ProductoService) {}

  producto : Producto [] = [{
    _id:"1",
    nombre: "Bateria",
    descripcion: "Suena chido",
    precio: 1234,
    cantidad: 24,
    categoria: "viento",
    estante: "Estante 4",
    seccionEstante: "Seccion 6",
    imagen: "bateria.jpg"
  }]
   
  

  editProduct(product: Producto) {
    // Lógica para modificar el producto
    this.productosService.setModificando(true);
    this.productosService.setProducto(product)
    console.log('Modificar producto:', product);
  }

  crearProducto(){
    // Lógica para crear el producto
    this.productosService.setModificando(true);
  }

  deleteProduct(productId: string) {
    this.producto = this.producto.filter(producto => producto._id !== productId);
    console.log('Producto eliminado con ID:', productId);
  }
}
