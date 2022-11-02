import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from './../calculadora.service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss'],
})
export class CalculadoraComponent implements OnInit {
  private res: number | undefined;

  constructor(private calculadoraService: CalculadoraService) {}

  ngOnInit(): void {}

  public somar(number1: string, number2: string): void {
    let n1: number = parseFloat(number1);
    let n2: number = parseFloat(number2);

    this.res = this.calculadoraService.somar(n1, n2);
  }

  public subtrair(number1: string, number2: string): void {
    let n1: number = parseFloat(number1);
    let n2: number = parseFloat(number2);

    this.res = this.calculadoraService.subtrair(n1, n2);
  }

  public multiplicar(number1: string, number2: string): void {
    let n1: number = parseFloat(number1);
    let n2: number = parseFloat(number2);

    this.res = this.calculadoraService.multiplicar(n1, n2);
  }

  public dividir(number1: string, number2: string): void {
    let n1: number = parseFloat(number1);
    let n2: number = parseFloat(number2);

    this.res = this.calculadoraService.dividir(n1, n2);
  }

  get getResultado(): string | undefined {
    return this.res?.toString();
  }
}
