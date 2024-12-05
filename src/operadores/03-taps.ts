import { map, range, tap } from 'rxjs';


const numeros$ = range(1,5);


numeros$.pipe(
    tap(x => console.log('Antes: ', x)),
    map(val => val *10),
    tap({
        next: valor => console.log("Despues: ", valor),
        complete: () => console.log("se terminó todo")
    })
)
.subscribe(val => console.log(' subs: ', val))
