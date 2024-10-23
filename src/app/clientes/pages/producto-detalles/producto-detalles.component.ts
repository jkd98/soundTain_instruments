import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../../../shared/interfaces/producto';
import { ProductoService } from '../../../shared/services/producto.service';
import { ActivatedRoute } from '@angular/router';
import { UnProducto } from '../../../shared/interfaces/unProducto';

@Component({
  selector: 'app-producto-detalles',
  templateUrl: './producto-detalles.component.html',
  styleUrl: './producto-detalles.component.css'
})
export class ProductoDetallesComponent implements OnInit{
  public producto:Producto = {_id:'',nombre:'',descripcion:'',precio:0};
  constructor(private productoService:ProductoService,private activatedRouter: ActivatedRoute){}
  ngOnInit(): void {

    let id = '';
    this.activatedRouter.params
      .subscribe(params => {
        id = params['ins'];
      }
    );
    console.log(id);
    this.obtenerProducto(id);
  }

  async obtenerProducto(id:Producto['_id']) {
    const data:UnProducto =  await this.productoService.obtenerProducto(id);
    this.producto = data.producto;
  }
}
