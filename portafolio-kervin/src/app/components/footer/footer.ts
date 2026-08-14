import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IdiomaService } from '../../services/idioma';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {

  anioActual: number = new Date().getFullYear();

  constructor(
    public idiomaService: IdiomaService
  ) {}

}