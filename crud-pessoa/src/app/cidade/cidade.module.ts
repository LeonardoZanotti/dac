import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarCidadeComponent } from './editar-cidade/editar-cidade.component';
import { ListarCidadeComponent } from './listar-cidade/listar-cidade.component';
import { InserirCidadeComponent } from './inserir-cidade/inserir-cidade.component';



@NgModule({
  declarations: [
    EditarCidadeComponent,
    ListarCidadeComponent,
    InserirCidadeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CidadeModule { }
