import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutcltPageComponent } from './pages/layoutclt-page/layoutclt-page.component';
import { FiltersComponent } from './components/filters/filters.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ClientesRoutingModule } from './clientes-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ListadoProductosComponent } from './components/listado-productos/listado-productos.component';
import { HeroNosotrosComponent } from './components/hero-nosotros/hero-nosotros.component';
import { InstrumentosGeneralComponent } from './pages/instrumentos-general/instrumentos-general.component';
import { MatFormFieldModule } from '@angular/material/form-field'; // Importar para mat-form-field
import { MatInputModule } from '@angular/material/input'; // Importar para matInput
import { FormsModule } from '@angular/forms';
import { ProductoDetallesComponent } from './pages/producto-detalles/producto-detalles.component'; // Para usar [(ngModel)] si es necesario
@NgModule({
  declarations: [
    LayoutcltPageComponent,
    FiltersComponent,
    HomePageComponent,
    ListadoProductosComponent,
    HeroNosotrosComponent,
    InstrumentosGeneralComponent,
    ProductoDetallesComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
    
  ]
})
export class ClientesModule { }
