import { fromEvent, map, takeWhile } from "rxjs";


const click = fromEvent<MouseEvent>(document, 'click')
.pipe(
    map(({x,y}) => ({x,y})),
    //el true hace que se imprima el ultimo valor que supera el 150
    takeWhile(({y}) => y <= 150, true)
)
.subscribe({
    next: val => console.log("next: ", val),
    complete: () => console.log("complete")
})