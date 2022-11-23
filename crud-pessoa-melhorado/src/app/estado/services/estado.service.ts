import { Injectable } from '@angular/core';
import { Estado } from './../../shared/models/estado.model';

const LS_CHAVE: string = 'estados';

@Injectable({
  providedIn: 'root',
})
export class EstadoService {
  constructor() {}

  listarTodos(): Estado[] {
    const estados = localStorage[LS_CHAVE];
    return estados ? JSON.parse(estados) : [];
  }

  inserir(estado: Estado): void {
    const estados: Estado[] = this.listarTodos();
    estado.id = new Date().getTime();
    estados.push(estado);
    localStorage[LS_CHAVE] = JSON.stringify(estados);
  }

  buscarPorId(id: number): Estado | undefined {
    const estados: Estado[] = this.listarTodos();
    return estados.find((estado) => (estado.id = id));
  }

  atualizar(estado: Estado): void {
    const estados: Estado[] = this.listarTodos();
    estados.forEach((obj, index, objs) => {
      if (estado.id === obj.id) {
        objs[index] = estado;
      }
    });
    localStorage[LS_CHAVE] = JSON.stringify(estados);
  }

  remover(id: number): void {
    let estados: Estado[] = this.listarTodos();
    estados = estados.filter((estado) => estado.id !== id);
    localStorage[LS_CHAVE] = JSON.stringify(estados);
  }
}
