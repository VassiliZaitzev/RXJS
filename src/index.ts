import { filter, from, Observable, range } from 'rxjs';


range(1,10).pipe(
    filter((val,i) => {
        return val % 2 ===0 
    })
)//.subscribe(console.log)


const personajes = [
    {
        tipo: "heroe",
        nombre: "Batman"
    },
    {
        tipo: "heroe",
        nombre: "Robin"
    },
    {
        tipo: "villano",
        nombre: "Joker"
    }
]

from(personajes).pipe(
    filter(res => res.tipo == 'heroe')
).subscribe(console.log)