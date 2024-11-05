import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { clienteAxios } from '../../helpers/axiosClient';
import { Respuesta } from '../interfaces/respuesta';
import { UnProducto } from '../interfaces/unProducto';
import { Producto } from '../interfaces/producto';
import { BehaviorSubject } from 'rxjs';



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

  //||||||||||||||||||||||||||||||||||||||||
  //||||||Administracion Productos||||||||||
  //||||||||||||||||||||||||||||||||||||||||

  //Estado de modificacion de Productos
  private modificandoSource = new BehaviorSubject<boolean>(false);
  modificando$ = this.modificandoSource.asObservable();

  setModificando(valor: boolean) {
    this.modificandoSource.next(valor);
  }

  // Datos del pruducto
  private datos = new BehaviorSubject<Producto>({
    _id: '',
    nombre: '',
    descripcion: '',
    precio: 0
  });

  // Observable que otros componentes pueden suscribirse para obtener el producto
  producto$ = this.datos.asObservable();

  // Método para actualizar el producto en el servicio
  setProducto(producto: Producto) {
    this.datos.next(producto);
  }
}
