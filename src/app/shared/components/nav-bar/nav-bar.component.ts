import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { Route, Router, RouteReuseStrategy } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})

export class NavBarComponent implements OnInit {

  public showMenu: boolean = false;
  public log: boolean = false;

  constructor(private authServ:AuthService, private route:Router){}
  ngOnInit(): void {
    this.log = window.localStorage.getItem('rol') ? true : false;
  }
  onShowMenu(): void {
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

  logOut():void {
    this.authServ.logOut();
    this.log = false;
    //this.route.navigate(['/']);
  }

}

