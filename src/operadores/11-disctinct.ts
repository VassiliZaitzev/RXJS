import { distinct, from, of } from "rxjs";



const numeros$ = of(1,1,1,3,3,2,2,4,4,5,5,6,7,8,8)
.pipe(
    distinct(),
    
)
.subscribe({
    next: val => console.log("Next: ", val),
    complete: () => console.log("Complete")
})

interface Personaje {
    nombre: string;
}

const personaje:Personaje[] = [
    {
        nombre: "Megaman"
    },
    {
        nombre: "x"
    },
    {
        nombre: "zero"
    },
    {
        nombre: "Dr. Whily"
    },
    {
        nombre: "Megaman"
    },
    {
        nombre: "x"
    },
    {
        nombre: "zero"
    }
];


from(personaje)
.pipe(distinct(res => res.nombre))
.subscribe(console.log)