import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from './../../shared/models/usuario.model';
import { ModalUsuarioComponent } from './../modal-usuario/modal-usuario.component';
import { UsuarioService } from './../services/usuario.service';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.scss'],
})
export class ListarUsuarioComponent implements OnInit {
  usuarios: Usuario[] = [];

  constructor(
    private usuarioService: UsuarioService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.usuarios = [];
    this.listarTodos();
  }

  listarTodos(): Usuario[] {
    this.usuarioService.listarTodos().subscribe({
      next: (data: Usuario[]) => {
        this.usuarios = data ? data : [];
      },
    });
    return this.usuarios;
  }

  remover($event: any, usuario: Usuario): void {
    $event.preventDefault();
    if (confirm('Deseja realmente remover o usuário ' + usuario.nome + '?'))
      this.usuarioService
        .remover(usuario.id!)
        .subscribe({ complete: () => this.listarTodos() });
  }

  abrirModal(usuario: Usuario) {
    const modalRef = this.modalService.open(ModalUsuarioComponent);
    modalRef.componentInstance.usuario = usuario;
  }
}
