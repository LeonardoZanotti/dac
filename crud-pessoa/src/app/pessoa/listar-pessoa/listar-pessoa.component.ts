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
}
