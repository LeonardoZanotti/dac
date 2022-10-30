import { Component, OnInit } from '@angular/core';
import { SomaService } from '../services';

@Component({
  selector: 'app-soma',
  templateUrl: './soma.component.html',
  styleUrls: ['./soma.component.css'],
})
export class SomaComponent implements OnInit {
  private res: number | undefined = undefined;

  constructor(private somaService: SomaService) {}

  ngOnInit(): void {}

  somar(num1: string, num2: string): void {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    this.res = this.somaService.somar(n1, n2);
  }

  get resultado(): string | undefined {
    return this.res?.toString();
  }
}
