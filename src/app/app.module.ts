import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegationComponent } from './componets/navegation/navegation.component';
import { SignupComponent } from './componets/signup/signup.component';
import { SigninComponent } from './componets/signin/signin.component';
import { ProductosComponent } from './componets/productos/productos.component';
import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './componets/logout/logout.component';
import { CarritoComponent } from './componets/carrito/carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegationComponent,
    SignupComponent,
    SigninComponent,
    ProductosComponent,
    LogoutComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LogoutComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
