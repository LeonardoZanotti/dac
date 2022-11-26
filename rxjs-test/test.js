import { concat, count, filter, from, map, max, min, of, take } from 'rxjs';
// from
console.log('from');
from(['Curitiba', 'SJP', 'Pinhais', 'CIC', 'Colombo']).subscribe((valor) => console.log(valor));
// Observer with two dots
let arr = ['Ibicaré', 'Joaçaba', 'Treza Tílias', 'Luzerna'];
from(arr).subscribe({
    next: (valor) => {
        let x = 'Cidade: ' + valor;
        console.log(x);
    },
    error: (valor) => console.log('Erro: ' + valor),
    complete: () => console.log('Acabou'),
});
// Observer with functions
from(arr).subscribe({
    next(valor) {
        let x = 'Cidade: ' + valor;
        console.log(x);
    },
    error(valor) {
        console.log('Erro: ' + valor);
    },
    complete() {
        console.log('Acabou');
    },
});
// of
of('Curitiba', 200, 4.5, true).subscribe({
    next: (valor) => {
        let x = 'Valor: ' + valor;
        console.log(x);
    },
    error: (valor) => console.log('Erro: ' + valor),
    complete: () => console.log('Acabou'),
});
// pipe
let valores = Array.from({ length: 10 }, (_ = 5, i = 1) => +_ * (i + 1));
console.log('\nobs1');
const obs1 = from(valores).pipe(filter((valor) => valor % 2 == 0));
obs1.subscribe({
    next(valor) {
        console.log(valor);
    },
});
console.log('\nobs2');
const obs2 = from(valores).pipe(filter((valor) => valor % 2 == 0), map((valor) => valor / 10));
obs2.subscribe({
    next(valor) {
        console.log(valor);
    },
});
console.log('\nobs3');
const obs3 = from(valores).pipe(filter((valor) => valor % 2 == 0), map((valor) => valor / 10), take(2));
obs3.subscribe({
    next(valor) {
        console.log(valor);
    },
});
console.log('\nobs4');
const obs4 = from(valores).pipe(filter((valor) => valor % 2 == 0), count());
obs4.subscribe({
    next(valor) {
        console.log(valor);
    },
});
console.log('\nobs5');
const obs5 = from(valores).pipe(count((valor) => valor % 2 == 0));
obs5.subscribe({
    next(valor) {
        console.log(valor);
    },
});
console.log('\nobs6');
const obs6 = from(valores).pipe(max());
obs6.subscribe({
    next(valor) {
        console.log(valor);
    },
});
console.log('\nobs7');
const obs7 = from(valores).pipe(min());
obs7.subscribe({
    next(valor) {
        console.log(valor);
    },
});
console.log('\nobs8');
const obs8 = concat(obs2, obs3, obs4);
obs8.subscribe({
    next(valor) {
        console.log(valor);
    },
});
