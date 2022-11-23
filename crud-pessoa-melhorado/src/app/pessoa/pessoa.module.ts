import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { MinimoValidatorDirective } from './../shared/directives/minimo-validator.directive';
import { NumericoDirective } from './../shared/directives/numerico.directive';
import { EditarPessoaComponent } from './editar-pessoa/editar-pessoa.component';
import { InserirPessoaComponent } from './inserir-pessoa/inserir-pessoa.component';
import { ListarPessoaComponent } from './listar-pessoa/listar-pessoa.component';
import { PessoaService } from './services/pessoa.service';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [
    ListarPessoaComponent,
    InserirPessoaComponent,
    EditarPessoaComponent,
    NumericoDirective,
    MinimoValidatorDirective,
  ],
  imports: [CommonModule, RouterModule, FormsModule, NgxMaskModule.forRoot()],
  providers: [PessoaService],
})
export class PessoaModule {}
