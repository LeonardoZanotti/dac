import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculadoraService {
  constructor() {}

  public somar(number1: number, number2: number): number {
    return number1 + number2;
  }

  public subtrair(number1: number, number2: number): number {
    return number1 - number2;
  }

  public multiplicar(number1: number, number2: number): number {
    return number1 * number2;
  }

  public dividir(number1: number, number2: number): number {
    return number1 / number2;
  }
}
