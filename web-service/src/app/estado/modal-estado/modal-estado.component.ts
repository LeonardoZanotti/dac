import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Estado } from './../../shared/models/estado.model';

@Component({
  selector: 'app-modal-estado',
  templateUrl: './modal-estado.component.html',
  styleUrls: ['./modal-estado.component.scss'],
})
export class ModalEstadoComponent implements OnInit {
  @Input() estado!: Estado;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}
}
