import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from 'src/app/shared/models/login.model';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { LoginService } from './../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @ViewChild('formLogin') formLogin!: NgForm;
  login: Login = new Login();
  loading: boolean = false;
  message!: string;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    if (this.loginService.usuarioLogado) {
      this.router.navigate(['/home']);
    }
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (params: any) => (this.message = params['error'])
    );
  }

  logar(): void {
    this.loading = true;
    if (this.formLogin.form.valid) {
      this.loginService
        .login(this.login)
        .subscribe((usuario: Usuario | null) => {
          if (usuario) {
            this.loginService.usuarioLogado = usuario;
            this.router.navigate(['/home']);
          } else {
            this.message = 'Usuário/Senha inválidos.';
          }
        });
    }
    this.loading = false;
  }
}
