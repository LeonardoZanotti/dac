import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EditarEstadoComponent } from './editar-estado/editar-estado.component';
import { InserirEstadoComponent } from './inserir-estado/inserir-estado.component';
import { ListarEstadoComponent } from './listar-estado/listar-estado.component';
import { EstadoService } from './services/estado.service';
import { ModalEstadoComponent } from './modal-estado/modal-estado.component';

@NgModule({
  declarations: [
    ListarEstadoComponent,
    EditarEstadoComponent,
    InserirEstadoComponent,
    ModalEstadoComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [EstadoService],
})
export class EstadoModule {}
