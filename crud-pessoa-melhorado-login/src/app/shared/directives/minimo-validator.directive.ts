import { Directive, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[minimoValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MinimoValidatorDirective,
      multi: true,
    },
  ],
})
export class MinimoValidatorDirective implements Validator, OnInit {
  @Input('valorMinimo') valorMinimo: string = '0';

  constructor() {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    let n: number = +control.value;
    return isNaN(n) || n < +this.valorMinimo
      ? { minimo: true, requiredValue: +this.valorMinimo }
      : null;
  }
}
