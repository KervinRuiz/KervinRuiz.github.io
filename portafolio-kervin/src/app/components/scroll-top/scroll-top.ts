import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  imports: [],
  templateUrl: './scroll-top.html',
  styleUrl: './scroll-top.css'
})
export class ScrollTop {

  mostrarBoton: boolean = false;

  @HostListener('window:scroll')
  detectarScroll(): void {
    this.mostrarBoton = window.scrollY > 300;
  }

  subir(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

}