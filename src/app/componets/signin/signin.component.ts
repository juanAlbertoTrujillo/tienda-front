import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from '../../services/autenticacion.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  mensaje = '';
  mostrarMensaje = false;
  login = false;
  user = {
    usuario: '',
    contrasena: '',
    identificador: localStorage.getItem('identificador')
  };

  constructor(
    private autenticacionService: AutenticacionService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  signIn() {
    console.log('signIn');
    this.autenticacionService.serviceSignIn(this.user)
    .subscribe(
      res => {
        console.log(res);
        console.log(res.user);
        console.log(this.mostrarMensaje);
        this.mensaje = res.mensaje;
        if (res.estado === 0) {
          this.login = true;
          localStorage.setItem('sesion', res.user.sesion);
          console.log('sesion');
          console.log(localStorage.getItem('sesion'));
          localStorage.setItem('usuario', res.user.usuario);
          this.router.navigate(['/producto']);
        } else {
          this.mostrarMensaje = true;
          console.log(this.mostrarMensaje);
        }
      },
      err => {
        console.log(err);
        this.mostrarMensaje = true;
        console.log(this.mostrarMensaje);
        this.mensaje = err;
      }
    );

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
