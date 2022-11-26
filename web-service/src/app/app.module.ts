import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CidadeModule } from './cidade/cidade.module';
import { EnderecoModule } from './endereco/endereco.module';
import { EstadoModule } from './estado/estado.module';
import { HomeComponent } from './home/home.component';
import { PessoaModule } from './pessoa/pessoa.module';
import { SharedModule } from './shared/shared.module';
import { UsuarioModule } from './usuario/usuario.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    PessoaModule,
    CidadeModule,
    EstadoModule,
    EnderecoModule,
    SharedModule,
    NgbModule,
    NgSelectModule,
    HttpClientModule,
    UsuarioModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
