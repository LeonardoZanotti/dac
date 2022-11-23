import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Pessoa } from './../../shared/models/pessoa.model';
import { ModalPessoaComponent } from './../modal-pessoa/modal-pessoa.component';
import { PessoaService } from './../services/pessoa.service';

@Component({
  selector: 'app-listar-pessoa',
  templateUrl: './listar-pessoa.component.html',
  styleUrls: ['./listar-pessoa.component.scss'],
})
export class ListarPessoaComponent implements OnInit {
  pessoas: Pessoa[] = [];

  constructor(
    private pessoaService: PessoaService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.pessoas = this.pessoaService.listarTodos();
  }

  remover($event: any, pessoa: Pessoa): void {
    $event.preventDefault();
    if (confirm(`Deseja realmente remover a pessoa ${pessoa.nome}?`)) {
      this.pessoaService.remover(pessoa.id!);
      this.pessoas = this.pessoaService.listarTodos();
    }
  }

  abrirModalPessoa(pessoa: Pessoa): void {
    const modalRef = this.modalService.open(ModalPessoaComponent);
    modalRef.componentInstance.pessoa = pessoa;
  }
}
