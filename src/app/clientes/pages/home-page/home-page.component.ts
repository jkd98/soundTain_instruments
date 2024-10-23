import { Component, OnInit, } from '@angular/core';
import { ProductoService } from '../../../shared/services/producto.service';
import { Respuesta } from '../../../shared/interfaces/respuestaProducto';
import { Producto } from '../../../shared/interfaces/producto';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit{
  //
  public productosNvs:Producto[] = [];
  //
  constructor(private productosService:ProductoService) {  }
  //
  ngOnInit(): void {
    this.productosNuevos();

  }

  async productosNuevos(){
    const data:Respuesta = await this.productosService.obtenerProductosNuevos();
    this.productosNvs = data.productos;
    console.log(this.productosNvs);
  }
}
