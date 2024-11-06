import { Component, OnInit, } from '@angular/core';
import { Producto } from '../../../shared/interfaces/producto';
import { ProductoService } from '../../../shared/services/producto.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit{
  //
  public productosNvs:Producto[]=[];
  //
  constructor(private productoService:ProductoService) {  }
  //
  ngOnInit(): void {
    this.productosNuevos();
  }

  //
  productosNuevos():void{
    this.productoService.getProdNuevos()
      .subscribe(resp => {
        this.productosNvs = resp.data;
        console.log(resp);
      }
    );
  }

  


}
