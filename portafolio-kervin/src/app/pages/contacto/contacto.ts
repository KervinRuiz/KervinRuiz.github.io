import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { IdiomaService } from '../../services/idioma';

interface FormularioContacto {
  nombre: string;
  correo: string;
  asunto: string;
  mensaje: string;
}

@Component({
  selector: 'app-contacto',
  imports: [FormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class Contacto {

  enviando: boolean = false;
  mensajeExito: string = '';
  mensajeError: string = '';

  formulario: FormularioContacto = {
    nombre: '',
    correo: '',
    asunto: '',
    mensaje: ''
  };

  constructor(
    public idiomaService: IdiomaService
  ) {}

  async enviarMensaje(): Promise<void> {

    this.enviando = true;
    this.mensajeExito = '';
    this.mensajeError = '';

    const parametros = {
      nombre: this.formulario.nombre,
      correo: this.formulario.correo,
      asunto: this.formulario.asunto,
      mensaje: this.formulario.mensaje
    };

    try {

      await emailjs.send(
        'service_9yj94oa',
        'template_vwclh5m',
        parametros,
        {
          publicKey: 'CJJoKADVgSfkFqg4v'
        }
      );

      if (this.idiomaService.esEspanol()) {

        this.mensajeExito =
          'Mensaje enviado correctamente. Gracias por contactarme.';

      } else {

        this.mensajeExito =
          'Message sent successfully. Thank you for contacting me.';

      }

      this.formulario = {
        nombre: '',
        correo: '',
        asunto: '',
        mensaje: ''
      };

    } catch (error) {

      console.error(error);

      if (this.idiomaService.esEspanol()) {

        this.mensajeError =
          'No se pudo enviar el mensaje. Inténtalo nuevamente.';

      } else {

        this.mensajeError =
          'The message could not be sent. Please try again.';

      }

    } finally {

      this.enviando = false;

    }

  }

}