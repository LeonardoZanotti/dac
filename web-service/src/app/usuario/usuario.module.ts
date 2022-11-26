import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InserirEditarUsuarioComponent } from './inserir-editar-usuario/inserir-editar-usuario.component';
import { ListarUsuarioComponent } from './listar-usuario/listar-usuario.component';
import { ModalUsuarioComponent } from './modal-usuario/modal-usuario.component';
import { UsuarioService } from './services/usuario.service';
import { UsuarioRoutingModule } from './usuario-routing.module';

@NgModule({
  declarations: [
    InserirEditarUsuarioComponent,
    ListarUsuarioComponent,
    ModalUsuarioComponent,
  ],
  imports: [CommonModule, UsuarioRoutingModule, FormsModule, RouterModule],
  providers: [UsuarioService],
})
export class UsuarioModule {}
