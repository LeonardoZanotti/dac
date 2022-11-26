import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from './../../shared/models/usuario.model';
import { UsuarioService } from './../services/usuario.service';

@Component({
  selector: 'app-inserir-editar-usuario',
  templateUrl: './inserir-editar-usuario.component.html',
  styleUrls: ['./inserir-editar-usuario.component.scss'],
})
export class InserirEditarUsuarioComponent implements OnInit {
  @ViewChild('formUsuario') formUsuario!: NgForm;
  novoUsuario: boolean = true;
  usuario: Usuario = new Usuario();
  id!: string;
  loading!: boolean;

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.usuario = new Usuario();
    this.loading = false;

    this.id = this.route.snapshot.params['id'];
    this.novoUsuario = !this.id;

    if (!this.novoUsuario) {
      this.usuarioService
        .buscarPorId(+this.id)
        .subscribe((usuario: Usuario) => {
          this.usuario = usuario;
          this.usuario.senha = '';
        });
    }
  }

  salvar(): void {
    this.loading = true;
    if (this.formUsuario.form.valid) {
      if (this.novoUsuario) {
        this.usuarioService
          .inserir(this.usuario)
          .subscribe((usuario: Usuario) => {
            this.loading = false;
            this.router.navigate(['/usuarios']);
          });
      } else {
        this.usuarioService
          .alterar(this.usuario)
          .subscribe((usuario: Usuario) => {
            this.loading = false;
            this.router.navigate(['/usuarios']);
          });
      }
    } else {
      this.loading = false;
    }
  }
}
