import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { EditarCidadeComponent } from './editar-cidade/editar-cidade.component';
import { InserirCidadeComponent } from './inserir-cidade/inserir-cidade.component';
import { ListarCidadeComponent } from './listar-cidade/listar-cidade.component';
import { ModalCidadeComponent } from './modal-cidade/modal-cidade.component';
import { CidadeService } from './services/cidade.service';

@NgModule({
  declarations: [
    EditarCidadeComponent,
    ListarCidadeComponent,
    InserirCidadeComponent,
    ModalCidadeComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule, NgSelectModule],
  providers: [CidadeService],
})
export class CidadeModule {}
