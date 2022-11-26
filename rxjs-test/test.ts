import { from } from 'rxjs';

from(['Curitiba', 'SJP', 'Pinhais', 'CIC', 'Colombo']).subscribe((valor: string) => console.log(valor));
