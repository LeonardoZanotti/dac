import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarEstadoComponent } from './listar-estado/listar-estado.component';
import { EditarEstadoComponent } from './editar-estado/editar-estado.component';
import { InserirEstadoComponent } from './inserir-estado/inserir-estado.component';



@NgModule({
  declarations: [
    ListarEstadoComponent,
    EditarEstadoComponent,
    InserirEstadoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EstadoModule { }
