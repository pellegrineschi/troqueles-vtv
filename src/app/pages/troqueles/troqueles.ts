import { Component } from '@angular/core';

interface RangoTroquel {
  fecha: string;
  desde: number;
  hasta: number;
}

interface FormularioAnulado {
  fecha: string;
  numero: number;
  motivo: string;
  dominio: string;
}

interface TroquelCancelado {
  fecha: string;
  numero: number;
  motivo: string;
  dominio: string;
}

@Component({
  selector: 'app-troqueles',
  standalone: false,
  templateUrl: './troqueles.html',
  styleUrl: './troqueles.scss',
})
export class Troqueles {

  columnasRangos: string[] = [
    "Fecha",
    "Desde",
    "Hasta",
    "Total",
    "Anulados",
    "Cancelados",
    "Vigentes"


  ]

  rangos: RangoTroquel[] = [
    {
      fecha: '2023-02-01',
      desde: 4091593,
      hasta: 4092015
    },
    {
      fecha: '2023-02-02',
      desde: 4092016,
      hasta: 4092483
    }
  ];

  formulariosAnulados: FormularioAnulado[] = [
    {
      fecha: "2023-02-01",
      numero: 4091603,
      motivo: "Oblea mal pegada",
      dominio: "SNG422"
    },
    {
      fecha: "2023-02-01",
      numero: 4091604,
      motivo: "oblea mal pegada",
      dominio: "SNG422"
    },
    {
      fecha: "2023-02-01",
      numero: 3918558,
      motivo: "cambio de parabrisas",
      dominio: "JLD504"
    },
    {
      fecha: '2023-02-02',
      numero: 4092100,
      motivo: 'Mal impreso',
      dominio: '-',
    }
  ];

  troquelesCancelados: TroquelCancelado[] = [
    {
      fecha: "2023-02-01",
      numero: 4091605,
      motivo: "Reve de apto",
      dominio: "LXZ810"
    },
    
  ];

  calcularTotalRango(rango: RangoTroquel): number {
    return rango.hasta - rango.desde + 1;
  }

  contarFormulariosAnulados(fecha: string): number {
    return this.formulariosAnulados.filter((formulario) => formulario.fecha === fecha).length;
  }

  obtenerFormulariosAnulados(fecha: string): FormularioAnulado[] {
    return this.formulariosAnulados.filter((formulario) => formulario.fecha === fecha);
  }

  contarTroquelesCancelados(fecha: string): number {
    return this.troquelesCancelados.filter((troquel) => troquel.fecha === fecha).length;
  }

  obtenerTroquelesCancelados(fecha: string): TroquelCancelado[] {
    return this.troquelesCancelados.filter((troquel) => troquel.fecha === fecha);
  }

  calcularTroquelesVigentes(rango: RangoTroquel): number {
    return (
      this.calcularTotalRango(rango) -
      this.contarFormulariosAnulados(rango.fecha) -
      this.contarTroquelesCancelados(rango.fecha)
    )
  }


}

