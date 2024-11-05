import { Component, Input } from '@angular/core';
import { Producto } from '../../interfaces/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
@Input('producto') producto!: Producto;
@Input('imagen') imgProducto: Producto['imagen'] = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.mrcdinstrumentos.com.mx%2Fshared%2Fproductos%2F14870%2F8202510.jpg&f=1&nofb=1&ipt=078c2e8fb07e0924f5e5bec18cf065e750b598f95c6a98198fcfa10110bd9b14&ipo=images";

getProducto(){
  const product:Producto = {
    _id:this.producto._id,
    nombre:this.producto.nombre,
    descripcion:this.producto.descripcion,
    precio:this.producto.precio
  };

  return product;
}
  
}
