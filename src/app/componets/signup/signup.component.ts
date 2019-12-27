import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from '../../services/autenticacion.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  mensaje = '';
  mostrarMensaje = false;
  user = {
    usuario: '',
    contrasena: ''
  };

  constructor(
    private autenticacionService: AutenticacionService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  signUp() {
    console.log('signUp');
    this.autenticacionService.serviceSignUp(this.user)
    .subscribe(
      res => {
        this.mostrarMensaje = true;
        this.mensaje = res.mensaje;
        // this.router.navigate(['/producto']);
      },
      err => {
        console.log(err);
        this.mostrarMensaje = true;
        this.mensaje = err;
      }
    );

    this.quitarAlert();
  }

  quitarAlert() {
    window.setTimeout(() => {
      $('.alert').fadeTo(500, 0).slideUp(500, () => {
          $(this).remove();
      });
    }, 2000);
  }
}
