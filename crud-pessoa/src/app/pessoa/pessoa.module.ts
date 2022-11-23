import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ListarPessoaComponent } from './listar-pessoa/listar-pessoa.component';
import { PessoaService } from './services/pessoa.service';
import { InserirPessoaComponent } from './inserir-pessoa/inserir-pessoa.component';

@NgModule({
  declarations: [ListarPessoaComponent, InserirPessoaComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [PessoaService],
})
export class PessoaModule {}
