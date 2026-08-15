import { Component } from '@angular/core';
import { IdiomaService } from '../../services/idioma';

interface Proyecto {
  titulo: string;
  tituloEn: string;

  descripcion: string;
  descripcionEn: string;

  imagen: string;
  tecnologias: string[];

  categoria: string;

  repositorio?: string;
  demostracion?: string;

  destacado: boolean;
}

@Component({
  selector: 'app-proyectos',
  imports: [],
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.css'
})
export class Proyectos {

  categoriaSeleccionada: string = 'Todos';

  proyectoSeleccionado: Proyecto | null = null;

  constructor(
    public idiomaService: IdiomaService
  ) {}

  categorias: string[] = [
    'Todos',
    'Backend',
    'Web',
    'Escritorio',
    'Móvil'
  ];

  proyectos: Proyecto[] = [
    {
      titulo: 'Sistema de Punto de Venta',

      tituloEn: 'Point of Sale System',

      descripcion:
        'Sistema desarrollado para administrar ventas, inventario, clientes, facturación y códigos de barras.',

      descripcionEn:
        'System developed to manage sales, inventory, customers, invoicing and barcode operations.',

      imagen: '/Imagenes/proyectos/PuntoVentas.jpg',

      tecnologias: [
        'C#',
        'SQL Server',
        'Windows Forms',
        'Procedimientos almacenados'
      ],

      categoria: 'Escritorio',

      destacado: true
    },

    {
      titulo: 'Sistema de Gestión de Contratos',

      tituloEn: 'Contract Management System',

      descripcion:
        'Aplicación web para administrar contratos, empleados y clientes mediante una arquitectura estructurada.',

      descripcionEn:
        'Web application for managing contracts, employees and customers through a structured architecture.',

      imagen: '/Imagenes/proyectos/License.jpg',

      tecnologias: [
        'ASP.NET MVC',
        'C#',
        'SQL Server',
        'Bootstrap'
      ],

      categoria: 'Web',

      destacado: true
    },

    {
      titulo: 'Sistema de Inventario',

      tituloEn: 'Inventory Management System',

      descripcion:
        'Aplicación para controlar productos, existencias y movimientos de inventario.',

      descripcionEn:
        'Application designed to manage products, stock levels and inventory movements.',

      imagen: '/Imagenes/proyectos/Juegos.jpg',

      tecnologias: [
        'C#',
        'SQL Server',
        'APIs',
        'Windows Forms'
      ],

      categoria: 'Escritorio',

      destacado: false
    },
    {
      titulo: 'Sistema para Taller Mecánico',

      tituloEn: 'Auto Repair Shop Management System',

      descripcion:
        'Sistema modular para administrar clientes, vehículos, reparaciones, empleados, servicios y facturación.',

      descripcionEn:
        'Modular system for managing customers, vehicles, repairs, employees, services and invoicing.',

      imagen: '/Imagenes/proyectos/Taller.jpg',

      tecnologias: [
        'C#',
        'SQL Server',
        'Windows Forms',
        'MVC'
      ],

      categoria: 'Backend',

      destacado: true
    }
  ];

  get proyectosFiltrados(): Proyecto[] {

    if (this.categoriaSeleccionada === 'Todos') {
      return this.proyectos;
    }

    return this.proyectos.filter(
      proyecto =>
        proyecto.categoria === this.categoriaSeleccionada
    );
  }

  seleccionarCategoria(categoria: string): void {
    this.categoriaSeleccionada = categoria;
  }

  abrirProyecto(proyecto: Proyecto): void {
    this.proyectoSeleccionado = proyecto;
  }

  cerrarProyecto(): void {
    this.proyectoSeleccionado = null;
  }

  obtenerCategoriaIngles(categoria: string): string {

    switch (categoria) {

      case 'Todos':
        return 'All';

      case 'Backend':
        return 'Backend';

      case 'Web':
        return 'Web';

      case 'Escritorio':
        return 'Desktop';

      case 'Móvil':
        return 'Mobile';

      default:
        return categoria;
    }
  }

}