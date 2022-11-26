import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CidadeService } from './../../cidade/services/cidade.service';
import { Cidade } from './../../shared/models/cidade.model';
import { Endereco } from './../../shared/models/endereco.model';
import { EnderecoService } from './../services/endereco.service';

@Component({
  selector: 'app-editar-endereco',
  templateUrl: './editar-endereco.component.html',
  styleUrls: ['./editar-endereco.component.scss'],
})
export class EditarEnderecoComponent implements OnInit {
  @ViewChild('formEndereco') formEndereco!: NgForm;
  endereco!: Endereco;
  cidades!: Cidade[];

  constructor(
    private enderecoService: EnderecoService,
    private cidadeService: CidadeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    const res = this.enderecoService.buscarPorId(id);
    if (res) this.endereco = res;
    else throw new Error('Endereco não encontrado: id = ' + id);
    this.cidades = this.cidadeService.listarTodos();
  }

  atualizar(): void {
    if (this.formEndereco.form.valid) {
      this.enderecoService.atualizar(this.endereco);
      this.router.navigate(['/enderecos']);
    }
  }

  atualizarEstado(): void {
    this.endereco.estado = this.endereco.cidade?.estado;
    console.log(this.endereco.estado);
  }
}
