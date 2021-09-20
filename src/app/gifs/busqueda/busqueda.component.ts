import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [],
})
export class BusquedaComponent {
  // @ViewChild busca en el HTML por referencias, por clases y por variables de plantilla, que es lo que he usado en este caso
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>; //Non-null assertion operator -> !  Se usa para asegurarse que el objeto no es nulo y no es undefined

  constructor(private gifsService: GifsService) {}

  buscar() {
    const valor = this.txtBuscar.nativeElement.value;

    if (valor.trim().length === 0) {
      return;
    }

    this.gifsService.buscarGifs(valor);

    this.txtBuscar.nativeElement.value = '';
  }
}
