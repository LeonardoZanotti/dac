import { Cidade } from './cidade.model';
import { Estado } from './estado.model';
export class Endereco {
  constructor(
    public id?: number,
    public rua?: string,
    public numero?: number,
    public complemento?: string,
    public bairro?: string,
    public cep?: string,
    public cidade?: Cidade,
    public estado?: Estado,
    public residencial?: boolean
  ) {}
}
