import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InserirCidadeComponent } from './cidade/inserir-cidade/inserir-cidade.component';
import { ListarCidadeComponent } from './cidade/listar-cidade/listar-cidade.component';
import { EditarEnderecoComponent } from './endereco/editar-endereco/editar-endereco.component';
import { InserirEnderecoComponent } from './endereco/inserir-endereco/inserir-endereco.component';
import { ListarEnderecoComponent } from './endereco/listar-endereco/listar-endereco.component';
import { EditarEstadoComponent } from './estado/editar-estado/editar-estado.component';
import { InserirEstadoComponent } from './estado/inserir-estado/inserir-estado.component';
import { ListarEstadoComponent } from './estado/listar-estado/listar-estado.component';
import { EditarPessoaComponent } from './pessoa/editar-pessoa/editar-pessoa.component';
import { InserirPessoaComponent } from './pessoa/inserir-pessoa/inserir-pessoa.component';
import { ListarPessoaComponent } from './pessoa/listar-pessoa/listar-pessoa.component';

const routes: Routes = [
  { path: '', redirectTo: 'pessoas/listar', pathMatch: 'full' },

  { path: 'pessoas', redirectTo: 'pessoas/listar' },
  { path: 'pessoas/listar', component: ListarPessoaComponent },
  { path: 'pessoas/novo', component: InserirPessoaComponent },
  { path: 'pessoas/editar/:id', component: EditarPessoaComponent },

  { path: 'estado', redirectTo: 'estado/listar' },
  { path: 'estado/listar', component: ListarEstadoComponent },
  { path: 'estado/novo', component: InserirEstadoComponent },
  { path: 'estado/editar/:id', component: EditarEstadoComponent },

  { path: 'cidade', redirectTo: 'cidade/listar' },
  { path: 'cidade/listar', component: ListarCidadeComponent },
  { path: 'cidade/novo', component: InserirCidadeComponent },
  { path: 'cidade/editar/:id', component: EditarEstadoComponent },

  { path: 'endereco', redirectTo: 'endereco/listar' },
  { path: 'endereco/listar', component: ListarEnderecoComponent },
  { path: 'endereco/novo', component: InserirEnderecoComponent },
  { path: 'endereco/editar/:id', component: EditarEnderecoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
