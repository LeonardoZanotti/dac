import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Endereco } from './../../shared/models/endereco.model';
import { ModalEnderecoComponent } from './../modal-endereco/modal-endereco.component';
import { EnderecoService } from './../services/endereco.service';

@Component({
  selector: 'app-listar-endereco',
  templateUrl: './listar-endereco.component.html',
  styleUrls: ['./listar-endereco.component.scss'],
})
export class ListarEnderecoComponent implements OnInit {
  enderecos: Endereco[] = [];

  constructor(
    private enderecoService: EnderecoService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.enderecos = this.enderecoService.listarTodos();
  }

  remover($event: any, endereco: Endereco): void {
    $event.preventDefault();
    if (
      confirm(
        `Deseja realmente remover o endereço ${endereco.rua} ${endereco.numero}?`
      )
    ) {
      this.enderecoService.remover(endereco.id!);
      this.enderecos = this.enderecoService.listarTodos();
    }
  }

  abrirModalEndereco(endereco: Endereco): void {
    const modalRef = this.modalService.open(ModalEnderecoComponent);
    modalRef.componentInstance.endereco = endereco;
  }
}
