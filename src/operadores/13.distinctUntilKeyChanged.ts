import { distinct, distinctUntilChanged, distinctUntilKeyChanged, from, of } from "rxjs";



const numeros$ = of(1,1,3,3,2,2,4,1,4,5,5,6,7,8,8)
.pipe(
    //distinct(),
    distinctUntilChanged()
    
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
        nombre: "Megaman"
    },
    {
        nombre: "zero"
    },
    {
        nombre: "Dr. Whily"
    },
    {
        nombre: "x"
    },
    {
        nombre: "x"
    },
    {
        nombre: "zero"
    }
];


from(personaje)
.pipe(
    //distinct(res => res.nombre)
    //sirve para booleanos, ints, etc, operadores primitivos
    //distinctUntilChanged((ant, act) => ant.nombre === act.nombre)
    distinctUntilKeyChanged('nombre')
)
.subscribe(console.log)