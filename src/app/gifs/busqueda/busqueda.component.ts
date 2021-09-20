import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [],
})
export class BusquedaComponent {
  // @ViewChild busca en el HTML por referencias, por clases y por variables de plantilla, que es lo que he usado en este caso
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>; //Non-null assertion operator -> !  Se usa para asegurarse que el objeto no es nulo y no es undefined

  buscar() {
    const valor = this.txtBuscar.nativeElement.value;
    console.log(valor);

    this.txtBuscar.nativeElement.value = '';
  }
}
