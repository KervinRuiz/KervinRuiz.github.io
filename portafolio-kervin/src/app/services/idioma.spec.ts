import { Injectable, signal } from '@angular/core';

export type Idioma = 'es' | 'en';

@Injectable({
  providedIn: 'root'
})
export class IdiomaService {

  idiomaActual = signal<Idioma>('es');

  cambiarIdioma(): void {
    const nuevoIdioma: Idioma =
      this.idiomaActual() === 'es' ? 'en' : 'es';

    this.idiomaActual.set(nuevoIdioma);

    document.documentElement.lang = nuevoIdioma;
  }

  esEspanol(): boolean {
    return this.idiomaActual() === 'es';
  }

  esIngles(): boolean {
    return this.idiomaActual() === 'en';
  }

}