import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  private URL = 'https://tiendaitacoppel.herokuapp.com/api';

  constructor(private http: HttpClient) { }

  serviceSignUp(user) {
    return this.http.post<any>(this.URL + '/usuarior', user);
  }

  serviceSignIn(user) {
    return this.http.post<any>(this.URL + '/usuarioi', user);
  }

  serviceSignOut(user) {
    return this.http.post<any>(this.URL + '/usuarioc', user);
  }
}
