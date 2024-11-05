import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoComponent } from './components/producto/producto.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { ListadoComponent } from './components/listado/listado.component';
import { AdministradorProductosComponent } from './pages/administrador-productos/administrador-productos.component';
import { ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    ProductoComponent,
    BusquedaComponent,
    ListadoComponent,
    AdministradorProductosComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    
  ]
})
export class AdminModule { }
