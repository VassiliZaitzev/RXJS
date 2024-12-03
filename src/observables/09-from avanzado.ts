import { asyncScheduler, from } from 'rxjs';



const observer = {
    next: val => console.log('%csrc\index.ts:6 val', 'color: #007acc;', val),
    complete: () => console.log('%csrc\index.ts:7 complete', 'color: #007acc;')
}

//const source$ = from([1,2,3,4,5]);
//const source$ = of([1,2,3,4,5]);

//const source$ = from('fernando');

const source$ = from(fetch('https://restcountries.com/v3.1/all'));


// source$.subscribe(async(resp) => {
//     console.log(resp);
//     const dataRep = await resp.json();
//     console.log('%csrc\index.ts:21 dataRep', 'color: #007acc;', dataRep);
// })


const miGenerador = function*() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const miIterable = miGenerador();

from(miIterable).subscribe(observer); 