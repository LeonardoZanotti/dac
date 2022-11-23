import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CidadeModule } from './cidade/cidade.module';
import { EnderecoModule } from './endereco/endereco.module';
import { EstadoModule } from './estado/estado.module';
import { PessoaModule } from './pessoa/pessoa.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PessoaModule,
    CidadeModule,
    EstadoModule,
    EnderecoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
