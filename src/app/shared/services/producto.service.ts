import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { RespuestaProducto } from '../interfaces/respuestaProducto';
import { Producto } from '../interfaces/producto';
import { Filtro } from '../interfaces/filtro';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ProductoService {
  
  private baseURL:string = environment.API;

  constructor(private http: HttpClient) { 

  }

  getProdNuevos():Observable<RespuestaProducto>{
    return this.http.get<RespuestaProducto>(`${this.baseURL}/productos/nuevos`);
  }

  getDetalleProducto(id:Producto['_id']):Observable<RespuestaProducto>{
    return this.http.get<RespuestaProducto>(`${this.baseURL}/productos/${id}`);
  }

  getProductosFiltrados(filtros: { categoria?: string; precioMin?: number; precioMax?: number; nombre?: string }):Observable<RespuestaProducto>{
    let params = new HttpParams();
    if (filtros.categoria) params = params.set('categoria', filtros.categoria);
    if (filtros.precioMin !== undefined) params = params.set('minPrecio', filtros.precioMin.toString());
    if (filtros.precioMax !== undefined) params = params.set('maxPrecio', filtros.precioMax.toString());
    if (filtros.nombre) params = params.set('nombre', filtros.nombre);
    return this.http.get<RespuestaProducto>(`${this.baseURL}/productos`, { params });
  }
  
  /**Admin***/
  
}
  

