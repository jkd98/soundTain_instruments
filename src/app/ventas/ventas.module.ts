import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoComponent } from './components/carrito/carrito.component';
import { VentasRoutingModule } from './ventas-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HistorialComprasComponent } from './pages/historial-compras/historial-compras.component';



@NgModule({
  declarations: [
    CarritoComponent,
    HistorialComprasComponent
  ],
  imports: [
    CommonModule,
    VentasRoutingModule,
    SharedModule
  ]
})
export class VentasModule { }
