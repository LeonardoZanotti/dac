import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxMaskModule } from 'ngx-mask';
import { SharedModule } from './../shared/shared.module';
import { EditarEnderecoComponent } from './editar-endereco/editar-endereco.component';
import { InserirEnderecoComponent } from './inserir-endereco/inserir-endereco.component';
import { ListarEnderecoComponent } from './listar-endereco/listar-endereco.component';
import { ModalEnderecoComponent } from './modal-endereco/modal-endereco.component';
import { EnderecoService } from './services/endereco.service';

@NgModule({
  declarations: [
    ListarEnderecoComponent,
    InserirEnderecoComponent,
    EditarEnderecoComponent,
    ModalEnderecoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule,
    NgxMaskModule.forRoot(),
    NgSelectModule,
  ],
  providers: [EnderecoService],
})
export class EnderecoModule {}
