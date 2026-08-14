import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IdiomaService } from '../../services/idioma';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  menuAbierto = false;

  constructor(
    public idiomaService: IdiomaService
  ) {}

  cambiarMenu(): void {
    this.menuAbierto = !this.menuAbierto;
  }

  cerrarMenu(): void {
    this.menuAbierto = false;
  }

  cambiarIdioma(): void {
    this.idiomaService.cambiarIdioma();
  }

}