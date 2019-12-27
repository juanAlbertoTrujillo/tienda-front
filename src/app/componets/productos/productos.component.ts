import { Component, OnInit } from '@angular/core';
import { TiendaService } from '../../services/tienda.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  mensaje = '';
  mostrarMensaje = false;
  productos: any;

  constructor(
    private tiendaService: TiendaService
  ) { }

  ngOnInit() {
    this.mostrarProductos();
  }

  mostrarProductos() {
    console.log('mostrarProductos');
    this.tiendaService.obtenerArticulos()
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

  agregarArticuloCarrito(articulo) {
    console.log('agregarArticuloCarrito'),
    articulo.identificador = localStorage.getItem('identificador');
    articulo.usuario = localStorage.getItem('usuario');
    console.log(articulo);
    this.tiendaService.agregarArticuloCarrito(articulo)
    .subscribe(
      res => {
        console.log(res);
        this.mensaje = res.mensaje;
        localStorage.setItem('identificador', res.respuesta.identificador);
      },
      err => {
        console.log(err);
        this.mensaje = err;
      }
    );
    this.mostrarMensaje = true;
    this.quitarAlert();
  }

  quitarAlert() {
    window.setTimeout(() => {
      $('.alert').fadeTo(500, 0).slideUp(500, () => {
        this.mostrarMensaje = false;
        console.log(this.mostrarMensaje);
      });
    }, 2000);
  }

}
