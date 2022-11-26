import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Endereco } from './../../shared/models/endereco.model';

@Component({
  selector: 'app-modal-endereco',
  templateUrl: './modal-endereco.component.html',
  styleUrls: ['./modal-endereco.component.scss'],
})
export class ModalEnderecoComponent implements OnInit {
  @Input() endereco!: Endereco;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}
}
