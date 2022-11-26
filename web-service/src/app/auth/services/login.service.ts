import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Login } from './../../shared/models/login.model';
import { Usuario } from './../../shared/models/usuario.model';

const LS_CHAVE: string = 'usuarioLogado';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  public get usuarioLogado(): Usuario {
    let user = localStorage[LS_CHAVE];
    return user ? JSON.parse(localStorage[LS_CHAVE]) : null;
  }

  public set usuarioLogado(usuario: Usuario) {
    localStorage[LS_CHAVE] = JSON.stringify(usuario);
  }

  login(login: Login): Observable<Usuario | null> {
    let usuario = new Usuario(
      1,
      'Leonardo-Func',
      login.login,
      login.senha,
      'FUNC'
    );

    if (login.login === login.senha) {
      if (login.login === 'admin') {
        usuario = new Usuario(
          1,
          'Leonardo-Admin',
          login.login,
          login.senha,
          'ADMIN'
        );
      } else if (login.login === 'gerente') {
        usuario = new Usuario(
          1,
          'Leonardo-Gerente',
          login.login,
          login.senha,
          'GERENTE'
        );
      }
      return of(usuario);
    }
    return of(null);
  }

  logout() {
    delete localStorage[LS_CHAVE];
  }
}
