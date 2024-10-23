import { Component, ViewChild, ElementRef, AfterViewInit,Input } from '@angular/core';
import { Producto } from '../../../shared/interfaces/producto';
@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css'
})
export class ListadoProductosComponent implements AfterViewInit{

  @ViewChild('carrusel') carrusel!: ElementRef<HTMLDivElement>;
  public currentIndex = 0;
  public totalItems = 10; // Número total de productos en el carrusel
  public itemsPerView = 4; // Cantidad de productos visibles al mismo tiempo (ajusta según tu diseño responsivo)
  @Input('productos') productos:Producto[] = [];
  


  ngAfterViewInit() {
    this.setItemsPerView();
    window.addEventListener('resize', () => this.setItemsPerView());
  }

  setItemsPerView() {
    const width = window.innerWidth;
    if (width >= 1268) {
      this.itemsPerView = 4;
    } else if (width >= 1024) {
      this.itemsPerView = 3;
    } else if (width >= 768) {
      this.itemsPerView = 2;
    } else {
      this.itemsPerView = 1;
    }
  }

  anterior() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.totalItems - this.itemsPerView; // Vuelve al último conjunto de productos
    }
    this.actualizarCarrusel();
  }

  siguiente() {
    if (this.currentIndex < this.totalItems - this.itemsPerView) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // Vuelve al inicio
    }
    this.actualizarCarrusel();
  }

  actualizarCarrusel() {
    const carruselWidth = this.carrusel.nativeElement.offsetWidth;
    const desplazamiento = -(carruselWidth / this.itemsPerView) * this.currentIndex;
    this.carrusel.nativeElement.style.transform = `translateX(${desplazamiento}px)`;
  }


}
