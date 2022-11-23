import { Component, OnInit } from '@angular/core';
import { Pessoa } from './../../shared/models/pessoa.model';
import { PessoaService } from './../services/pessoa.service';

@Component({
  selector: 'app-listar-pessoa',
  templateUrl: './listar-pessoa.component.html',
  styleUrls: ['./listar-pessoa.component.scss'],
})
export class ListarPessoaComponent implements OnInit {
  pessoas: Pessoa[] = [];

  constructor(private pessoaService: PessoaService) {}

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
}
