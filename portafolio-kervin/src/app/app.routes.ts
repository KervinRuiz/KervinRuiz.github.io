import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { SobreMi } from './pages/sobre-mi/sobre-mi';
import { Proyectos } from './pages/proyectos/proyectos';
import { Habilidades } from './pages/habilidades/habilidades';
import { Contacto } from './pages/contacto/contacto';

export const routes: Routes = [
  {
    path: '',
    component: Inicio,
    title: 'Inicio | Kervin Rostrán'
  },
  {
    path: 'sobre-mi',
    component: SobreMi,
    title: 'Sobre mí | Kervin Rostrán'
  },
  {
    path: 'habilidades',
    component: Habilidades,
    title: 'Habilidades | Kervin Rostrán'
  },
  {
    path: 'proyectos',
    component: Proyectos,
    title: 'Proyectos | Kervin Rostrán'
  },
  {
    path: 'contacto',
    component: Contacto,
    title: 'Contacto | Kervin Rostrán'
  },
  {
    path: '**',
    redirectTo: ''
  }
];