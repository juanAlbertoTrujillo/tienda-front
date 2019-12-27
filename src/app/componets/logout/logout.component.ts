import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from '../../services/autenticacion.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  user = {
    usuario: localStorage.getItem('usuario'),
    _id: localStorage.getItem('_id'),
    sesion: localStorage.getItem('sesion')
  };

  constructor(
    private autenticacionService: AutenticacionService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  signOut() {
    console.log('signOut');
    this.autenticacionService.serviceSignOut(this.user)
    .subscribe(
      res => {

        if (res.estado === 0) {
          localStorage.removeItem('usuario');
          localStorage.setItem('sesion', 'false');

          this.router.navigate(['/producto']);
        }
      },
      err => {
        console.log(err);
      }
    );
  }
}
