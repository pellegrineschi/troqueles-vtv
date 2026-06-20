import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resumen-troqueles',
  standalone: false,
  templateUrl: './resumen-troqueles.html',
  styleUrl: './resumen-troqueles.scss',
})
export class ResumenTroqueles {
  @Input() total = 0;
  @Input() anulados = 0;
  @Input() cancelados = 0;
  @Input() vigentes = 0;
}
