import { Component } from '@angular/core';
import { IdiomaService } from '../../services/idioma';

interface Habilidad {
  nombre: string;
  nivel: string;
  nivelEn: string;
}

interface CategoriaHabilidad {
  titulo: string;
  tituloEn: string;
  descripcion: string;
  descripcionEn: string;
  habilidades: Habilidad[];
}

@Component({
  selector: 'app-habilidades',
  imports: [],
  templateUrl: './habilidades.html',
  styleUrl: './habilidades.css'
})
export class Habilidades {

  constructor(
    public idiomaService: IdiomaService
  ) {}

  categorias: CategoriaHabilidad[] = [
    {
      titulo: 'Lenguajes de programación',
      tituloEn: 'Programming languages',

      descripcion:
        'Lenguajes utilizados para desarrollar aplicaciones de escritorio, web, móviles y soluciones empresariales.',

      descripcionEn:
        'Programming languages used to develop desktop, web and mobile applications, as well as business solutions.',

      habilidades: [
        {
          nombre: 'C#',
          nivel: 'Intermedio',
          nivelEn: 'Intermediate'
        },
        {
          nombre: 'Java',
          nivel: 'Intermedio',
          nivelEn: 'Intermediate'
        },
        {
          nombre: 'JavaScript',
          nivel: 'Intermedio',
          nivelEn: 'Intermediate'
        },
        {
          nombre: 'TypeScript',
          nivel: 'Intermedio',
          nivelEn: 'Intermediate'
        },
        {
          nombre: 'Python',
          nivel: 'Básico',
          nivelEn: 'Basic'
        },
        {
          nombre: 'C++',
          nivel: 'Básico',
          nivelEn: 'Basic'
        },
        {
          nombre: 'PL/SQL',
          nivel: 'Intermedio',
          nivelEn: 'Intermediate'
        }
      ]
    },

    {
      titulo: 'Desarrollo frontend',
      tituloEn: 'Frontend development',

      descripcion:
        'Tecnologías utilizadas para construir interfaces web responsivas, dinámicas y orientadas a la experiencia del usuario.',

      descripcionEn:
        'Technologies used to build responsive and dynamic web interfaces focused on user experience.',

      habilidades: [
        {
          nombre: 'HTML',
          nivel: 'Intermedio',
          nivelEn: 'Intermediate'
        },
        {
          nombre: 'CSS',
          nivel: 'Intermedio',
          nivelEn: 'Intermediate'
        },
        {
          nombre: 'Angular',
          nivel: 'Intermedio',
          nivelEn: 'Intermediate'
        },
        {
          nombre: 'Bootstrap',
          nivel: 'Intermedio',
          nivelEn: 'Intermediate'
        },
        {
          nombre: 'AJAX',
          nivel: 'Intermedio',
          nivelEn: 'Intermediate'
        }
      ]
    },

    {
      titulo: 'Desarrollo backend',
      tituloEn: 'Backend development',

      descripcion:
        'Tecnologías para desarrollar lógica de negocio, servicios, aplicaciones web y comunicación entre sistemas.',

      descripcionEn:
        'Technologies used to develop business logic, services, web applications and communication between systems.',

      habilidades: [
        {
          nombre: 'ASP.NET',
          nivel: 'Intermedio',
          nivelEn: 'Intermediate'
        },
        {
          nombre: 'Node.js',
          nivel: 'Intermedio',
          nivelEn: 'Intermediate'
        },
        {
          nombre: 'APIs REST',
          nivel: 'Intermedio',
          nivelEn: 'Intermediate'
        }
      ]
    },

    {
      titulo: 'Desarrollo móvil',
      tituloEn: 'Mobile development',

      descripcion:
        'Herramientas utilizadas para desarrollar aplicaciones móviles multiplataforma.',

      descripcionEn:
        'Tools used to develop cross-platform mobile applications.',

      habilidades: [
        {
          nombre: 'React Native',
          nivel: 'Intermedio',
          nivelEn: 'Intermediate'
        },
        {
          nombre: 'Xamarin Forms',
          nivel: 'Intermedio',
          nivelEn: 'Intermediate'
        }
      ]
    },

    {
      titulo: 'Bases de datos',
      tituloEn: 'Databases',

      descripcion:
        'Motores y tecnologías utilizadas para diseñar, consultar, administrar e integrar bases de datos.',

      descripcionEn:
        'Database engines and technologies used to design, query, manage and integrate databases.',

      habilidades: [
        {
          nombre: 'SQL Server',
          nivel: 'Intermedio',
          nivelEn: 'Intermediate'
        },
        {
          nombre: 'MySQL',
          nivel: 'Intermedio',
          nivelEn: 'Intermediate'
        },
        {
          nombre: 'MongoDB',
          nivel: 'Básico',
          nivelEn: 'Basic'
        },
        {
          nombre: 'Oracle PL/SQL',
          nivel: 'Intermedio',
          nivelEn: 'Intermediate'
        }
      ]
    },

    {
      titulo: 'Cloud, redes y herramientas',
      tituloEn: 'Cloud, networking and tools',

      descripcion:
        'Herramientas y conocimientos complementarios para despliegue, infraestructura, redes y control de versiones.',

      descripcionEn:
        'Complementary tools and knowledge for deployment, infrastructure, networking and version control.',

      habilidades: [
        {
          nombre: 'Azure',
          nivel: 'Básico',
          nivelEn: 'Basic'
        },
        {
          nombre: 'Redes',
          nivel: 'Básico',
          nivelEn: 'Basic'
        },
        {
          nombre: 'Git',
          nivel: 'Intermedio',
          nivelEn: 'Intermediate'
        }
      ]
    }
  ];

}