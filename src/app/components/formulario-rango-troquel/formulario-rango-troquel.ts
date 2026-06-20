import { Component, EventEmitter, Output } from '@angular/core';

interface NuevoRangoTroquel {
  fecha: string;
  desde: number;
  hasta: number;
}

@Component({
  selector: 'app-formulario-rango-troquel',
  standalone: false,
  templateUrl: './formulario-rango-troquel.html',
  styleUrl: './formulario-rango-troquel.scss',
})
export class FormularioRangoTroquel {
  @Output() rangoCreado = new EventEmitter<NuevoRangoTroquel>();

  fecha = "";
  desde = 0;
  hasta = 0;

  agregarRango(): void {
    const nuevoRango: NuevoRangoTroquel = {
      fecha: this.fecha,
      desde: this.desde,
      hasta: this.hasta,
    };

    this.rangoCreado.emit(nuevoRango);

    this.fecha = "";
    this.desde = 0;
    this.hasta = 0;
  }

}
