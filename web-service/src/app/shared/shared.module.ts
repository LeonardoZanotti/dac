import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MinimoValidatorDirective } from './directives/minimo-validator.directive';
import { NumericoDirective } from './directives/numerico.directive';
import { CaixaAltaPipe } from './pipes/caixa-alta.pipe';

@NgModule({
  declarations: [NumericoDirective, MinimoValidatorDirective, CaixaAltaPipe],
  imports: [CommonModule],
  exports: [NumericoDirective, MinimoValidatorDirective, CaixaAltaPipe],
})
export class SharedModule {}
