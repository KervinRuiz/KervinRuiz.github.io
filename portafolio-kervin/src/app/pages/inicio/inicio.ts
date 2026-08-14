import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IdiomaService } from '../../services/idioma';

@Component({
  selector: 'app-inicio',
  imports: [RouterLink],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class Inicio {

  constructor(
    public idiomaService: IdiomaService
  ) {}

}