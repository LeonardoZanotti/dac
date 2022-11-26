import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from './../../shared/models/usuario.model';

@Component({
  selector: 'app-modal-usuario',
  templateUrl: './modal-usuario.component.html',
  styleUrls: ['./modal-usuario.component.scss'],
})
export class ModalUsuarioComponent implements OnInit {
  @Input() usuario: Usuario = new Usuario();

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}
}
