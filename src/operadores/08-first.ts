import { first, fromEvent, map, take, tap } from "rxjs";



const click = fromEvent<PointerEvent>(document, 'click')

click
.pipe(
    //take(1)
    tap(() => console.log("tap")),
    map( ({clientX, clientY}) => ({clientX, clientY})),
    first(event => event.clientY >= 150)
)
.subscribe({
    next: val => console.log("next: ", val),
    complete: () => console.log("Complete")
})