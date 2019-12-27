import { Component, OnInit } from '@angular/core';
import { LogoutComponent } from '../logout/logout.component';
@Component({
  selector: 'app-navegation',
  templateUrl: './navegation.component.html',
  styleUrls: ['./navegation.component.css']
})
export class NavegationComponent implements OnInit {

  constructor(private cerrarSesion: LogoutComponent) {
  }

  ngOnInit() {
  }

  obtenerSesion() {
    return localStorage.getItem('sesion');
  }
}
