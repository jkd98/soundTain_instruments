import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ProductoComponent } from './components/producto/producto.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    NavBarComponent,
    HeaderComponent,
    SearchBoxComponent,
    Error404PageComponent,
    ProductoComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
  ],
  exports: [
    NavBarComponent,
    HeaderComponent,
    Error404PageComponent,
    ProductoComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
