import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './../auth/auth.guard';
import { InserirEditarUsuarioComponent } from './inserir-editar-usuario/inserir-editar-usuario.component';
import { ListarUsuarioComponent } from './listar-usuario/listar-usuario.component';

export const usuarioRoutes: Routes = [
  { path: 'usuarios', redirectTo: 'usuarios/listar' },
  {
    path: 'usuarios/listar',
    component: ListarUsuarioComponent,
    canActivate: [AuthGuard],
    data: { role: 'ADMIN' },
  },
  {
    path: 'usuarios/novo',
    component: InserirEditarUsuarioComponent,
    canActivate: [AuthGuard],
    data: { role: 'ADMIN' },
  },
  {
    path: 'usuarios/editar/:id',
    component: InserirEditarUsuarioComponent,
    canActivate: [AuthGuard],
    data: { role: 'ADMIN' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(usuarioRoutes)],
  exports: [RouterModule],
})
export class UsuarioRoutingModule {}
