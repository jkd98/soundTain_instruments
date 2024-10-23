import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})

export class NavBarComponent {

  public showMenu:boolean = false;

  onShowMenu():void {
    this.showMenu = !this.showMenu;
  }


  // Método que se ejecuta al hacer clic fuera del menú
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    const target = event.target as HTMLElement;
    const isClickInsideMenu = target.closest('.nav__links') || target.closest('.hamburger__btn');

    // Si el clic no está dentro del menú o botón, oculta el menú
    if (!isClickInsideMenu && this.showMenu) {
      this.showMenu = false;
    }
  }
  
}

