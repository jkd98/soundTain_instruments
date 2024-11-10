import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../shared/interfaces/producto';
import { ProductoService } from '../../../shared/services/producto.service';
import { Filtro } from '../../../shared/interfaces/filtro';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-instrumentos-general',
  templateUrl: './instrumentos-general.component.html',
  styleUrl: './instrumentos-general.component.css'
})
export class InstrumentosGeneralComponent implements OnInit {

  public productos: Producto[] = [];
  
  public filtroForm!: FormGroup;
  
  public products:Producto[]=[];
  public iniciales:number = 2;
  public siguientes:number = 2;
  public actuales:number = 0;

  constructor(
    private productoService: ProductoService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    // Inicializa el formulario reactivo
    this.filtroForm = this.fb.group({
      categoria: [''],
      precioMin: [''],
      precioMax: [''],
      nombre: ['']
    });
    
    this.aplicarFiltros();
    
  }
  
  aplicarFiltros() {
    const filtros = this.filtroForm.value;
    this.productoService.getProductosFiltrados(filtros)
      .subscribe(resp => {
        this.productos = resp.data;
        console.log(resp);
        console.log(this.productos);
        this.productsIniciales();
      });
  }

  productsIniciales(){
    let i = 0;
    for(i;i<=this.iniciales;i++){
      this.products.push(this.productos[i]);
    }
    this.actuales = i;
  }

  masComents(){
    console.log(this.actuales);
    console.log(this.actuales+this.siguientes);
    console.log(this.products);
    let i = this.actuales;
    for(i;i<=(this.actuales+this.siguientes);i++){
      this.products.push(this.productos[i]);
    }
    console.log(this.products);
  
    this.actuales = i;
  }

}