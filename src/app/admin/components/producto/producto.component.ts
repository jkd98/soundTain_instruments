import { Component, Input } from '@angular/core';
import { AdminProductos } from '../../admin-productos';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  @Input() product: AdminProductos | null = null;

 
}
