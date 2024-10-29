import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { clienteAxios } from '../../helpers/axiosClient';
import { Respuesta } from '../interfaces/respuesta';
import { UnProducto } from '../interfaces/unProducto';
import { Producto } from '../interfaces/producto';



@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  public productos: any = [];
  // 
  constructor(
    private router: Router,
    
  ) { }
  //
  obtenerProductos = async () => {

  };

  async obtenerProductosNuevos() {
    const url: string = '/productos/nuevos';
    const data: Respuesta = (await clienteAxios.get(url)).data;
    //console.log(data);
    return data;
  }

  async obtenerProducto(id:Producto['_id']) {
    const url: string = '/productos';
    const data: UnProducto = (await clienteAxios.get(`${url}/${id}`)).data;
    console.log(data);
    return data;
  }
}
