import { Injectable } from '@angular/core';
import { clienteAxios } from '../../helpers/axiosClient';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  public productos:any = [];
  // 
  constructor(private router:Router) { }
  //
  obtenerProductos = async () => {
    try {
      const url = '/clientes/productos';
      const data = await clienteAxios.get(url);
      console.log(data);
      return null;
    } catch (error) {
      console.log(error);
      return;
    }
  } ;


}
