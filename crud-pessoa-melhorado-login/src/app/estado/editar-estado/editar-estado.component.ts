import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Estado } from './../../shared/models/estado.model';
import { EstadoService } from './../services/estado.service';

@Component({
  selector: 'app-editar-estado',
  templateUrl: './editar-estado.component.html',
  styleUrls: ['./editar-estado.component.scss'],
})
export class EditarEstadoComponent implements OnInit {
  @ViewChild('formEstado') formEstado!: NgForm;
  estado!: Estado;

  constructor(
    private estadoService: EstadoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    const res = this.estadoService.buscarPorId(id);
    if (res) this.estado = res;
    else throw new Error('Estado não encontrado: id = ' + id);
  }

  atualizar(): void {
    if (this.formEstado.form.valid) {
      this.estadoService.atualizar(this.estado);
      this.router.navigate(['/estados']);
    }
  }
}
