import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductosComponent} from './componets/productos/productos.component';
import {SigninComponent} from './componets/signin/signin.component';
import {SignupComponent} from './componets/signup/signup.component';
import {CarritoComponent} from './componets/carrito/carrito.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/producto',
    pathMatch: 'full'
  },
  {
    path: 'producto',
    component: ProductosComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'carrito',
    component: CarritoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
