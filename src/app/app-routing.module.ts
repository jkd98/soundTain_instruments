import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';
import { InstrumentosGeneralComponent } from './clientes/pages/instrumentos-general/instrumentos-general.component';
import { RegistroPageComponent } from './auth/pages/registro-page/registro-page.component';
import { ProductoDetallesComponent } from './clientes/pages/producto-detalles/producto-detalles.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)
  },
  {
    path: 'clientes',
    loadChildren: () => import('./clientes/clientes.module').then( m => m.ClientesModule )
  },
  {
    path: 'carrito',
    loadChildren: () => import('./ventas/ventas.module').then( m => m.VentasModule )
  },
  {
    path: 'administracion',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'nosotros',
    loadChildren: () => import('./nosotros/nosotros.module').then( m => m.NosotrosModule )
  },
  {
    path: '404',
    component:Error404PageComponent
  },
  {
    path: '',
    redirectTo: 'clientes',
    pathMatch: 'full'
  },
  {
    path: 'instrumentos',
    component: InstrumentosGeneralComponent
  },
  {
    path: 'registro',
    component: RegistroPageComponent
  },
  {
    path: 'producto-detalles',
    component: ProductoDetallesComponent
  },
  {
    path:'**',
    redirectTo:'404'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
