import { Component, Input } from '@angular/core';
import { Producto } from '../../interfaces/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  @Input('producto')
  producto!: Producto;
  
}
