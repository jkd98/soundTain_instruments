import { Component } from '@angular/core';
import { AdminProductos } from '../../admin-productos';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
   products: AdminProductos[] = [
    {
      id: 1,
      name: 'Producto 1',
      description: 'Descripción del Producto 1',
      type: 'Tipo A',
      quantity: 10,
      supplier: 'Proveedor A',
      cost: 100,
      publicPrice: 120,
      assignedSpace: 'A1',
      images: 'https://example.com/image1.jpg'
    },
    {
      id: 2,
      name: 'Producto 2',
      description: 'Descripción del Producto 2',
      type: 'Tipo B',
      quantity: 20,
      supplier: 'Proveedor B',
      cost: 150,
      publicPrice: 180,
      assignedSpace: 'B2',
      images: 'https://example.com/image2.jpg'
    }
  ];
  

  editProduct(product: AdminProductos) {
    // Lógica para modificar el producto
    console.log('Modificar producto:', product);
  }

  deleteProduct(productId: number) {
    this.products = this.products.filter(product => product.id !== productId);
    console.log('Producto eliminado con ID:', productId);
  }
}
