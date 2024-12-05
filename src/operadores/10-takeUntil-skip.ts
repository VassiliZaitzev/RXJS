import { from, fromEvent, interval, skip, takeUntil } from "rxjs";

const boton = document.createElement('button');
boton.innerHTML = "Detener Timer";

document.querySelector('body').append(boton);


const clickButon = fromEvent(boton, 'click')
.pipe(
    skip(2)
);

const counter = interval(1000)
.pipe(
    takeUntil(clickButon)
)
.subscribe({
    next: val => console.log("Next: ", val),
    complete: () => console.log("Complete")
})

