import { Component, OnInit, } from '@angular/core';
import { ProductoService } from '../../../shared/services/producto.service';
import { Respuesta } from '../../../shared/interfaces/respuesta';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit{
  //
  public productos:Respuesta['productos'] = [];
  //
  constructor(private productosService:ProductoService) {  }
  //
  ngOnInit(): void {
    this.productosService.obtenerProductosNuevos().subscribe(
      productos => {
        this.productos = productos;
        console.log(this.productos);
      }
    )

  }
}
