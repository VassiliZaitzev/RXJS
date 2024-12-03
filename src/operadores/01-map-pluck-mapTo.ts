import { fromEvent, map, mapTo, pluck, range } from 'rxjs';



/*range(1,5)
.pipe(
    map<number,string>(res => (res * 10).toString())
).subscribe(console.log);*/


const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');

keyUp$.pipe(
    map(res => res.code)
)
.subscribe(res => console.log("Map: ",res));


keyUp$.pipe(
    pluck('key')
)
.subscribe(res => console.log("Pluck: ",res)); 


keyUp$.pipe(
    mapTo('Tecla presionada')
)
.subscribe(res => console.log("Map To: ",res)); 