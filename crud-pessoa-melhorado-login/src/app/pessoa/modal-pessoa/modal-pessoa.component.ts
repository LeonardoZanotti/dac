import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Pessoa } from './../../shared/models/pessoa.model';

@Component({
  selector: 'app-modal-pessoa',
  templateUrl: './modal-pessoa.component.html',
  styleUrls: ['./modal-pessoa.component.scss'],
})
export class ModalPessoaComponent implements OnInit {
  @Input() pessoa!: Pessoa;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}
}
