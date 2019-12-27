import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  private URL = 'https://tiendaitacoppel.herokuapp.com/api';

  constructor(private http: HttpClient) { }

  obtenerArticulos() {
    return this.http.get<any>(this.URL + '/articulo');
  }
  agregarArticulo(articulo) {
    return this.http.post<any>(this.URL + '/articulo', articulo);
  }

  agregarArticuloCarrito(articulo) {
    return this.http.post<any>(this.URL + '/carrito', articulo);
  }

  consultarCarrito(articulo) {
    return this.http.post<any>(this.URL + '/carritou', articulo);
  }

  actualizarCantidad(articulo) {
    return this.http.put<any>(this.URL + '/carrito', articulo);
  }

  eliminarArticuloCarrito(articulo) {
    return this.http.post<any>(this.URL + '/carritod', articulo);
  }
}
