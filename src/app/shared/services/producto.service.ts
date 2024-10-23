import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Respuesta } from '../interfaces/respuesta';
import { environment } from '../../../environments/environment';
import { catchError, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private apiBaseUrl: string = `${environment.API}/productos`;
  public productos: any = [];
  // 
  constructor(private router: Router, private http: HttpClient) { }
  //
  obtenerProductos = async () => {

  };

  obtenerProductosNuevos():Observable<Respuesta['productos']>{
    const url: string = `${this.apiBaseUrl}/nuevos`;

    return this.http.get<Respuesta['productos']>(url).
      pipe(
        catchError(() => of([]))
      )
  }
}
