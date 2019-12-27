import { Component, OnInit } from '@angular/core';
import { TiendaService } from '../../services/tienda.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  mensaje = '';
  mostrarMensaje = false;
  productos: any;
  datos = {
    usuario: localStorage.getItem('usuario'),
    identificador: localStorage.getItem('identificador'),
  };

  constructor(
    private tiendaService: TiendaService
    ) { }

  ngOnInit() {
    this.consultarCarrito();
  }

  consultarCarrito() {
    console.log('consultarCarrito');
    this.tiendaService.consultarCarrito(this.datos)
    .subscribe(
      res => {
        console.log(res);
        this.productos = res;
      },
      err => {
        console.log(err);
      }
    );
  }

  actualizarCantidad(cantidad, producto) {
    console.log('actualizarCantidad');
    producto.cantidad = cantidad;
    this.tiendaService.actualizarCantidad(producto)
    .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  eliminarArticuloCarrito(producto) {
    console.log('elimiarticuloCarritoar');
    console.log(producto);
    this.tiendaService.eliminarArticuloCarrito(producto)
    .subscribe(
      res => {
        console.log(res);
        location.reload();
      },
      err => {
        console.log(err);
      }
    );
  }

}
