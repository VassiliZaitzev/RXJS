import { of } from 'rxjs';

const obs$ = of(1,2,3,4,5,6);



console.log("Inicio del obs");
obs$.subscribe(
    next => console.log(next),
    null,
    () => console.log("Terminamos la secuencia")
);

console.log("fin del obs");