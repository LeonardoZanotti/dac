import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EditarCidadeComponent } from './editar-cidade/editar-cidade.component';
import { InserirCidadeComponent } from './inserir-cidade/inserir-cidade.component';
import { ListarCidadeComponent } from './listar-cidade/listar-cidade.component';
import { CidadeService } from './services/cidade.service';
import { ModalCidadeComponent } from './modal-cidade/modal-cidade.component';

@NgModule({
  declarations: [
    EditarCidadeComponent,
    ListarCidadeComponent,
    InserirCidadeComponent,
    ModalCidadeComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [CidadeService],
})
export class CidadeModule {}
