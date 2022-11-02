import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CalculadoraService } from './calculadora.service';
import { CalculadoraComponent } from './calculadora/calculadora.component';

@NgModule({
  declarations: [CalculadoraComponent],
  imports: [CommonModule],
  exports: [CalculadoraComponent],
  providers: [CalculadoraService],
})
export class CalculadoraModule {}
