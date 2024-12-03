import { Observable, Observer } from "rxjs";


const observer:Observer<any> = {
    next: value => console.log("Next: ", value),
    error: error => console.log("Error: ", error),
    complete: () => console.log("Completado")
};


const intervalo$ = new Observable<number>(subscriber => {
    //Crear un contador 1,2,3,4,5........
    var count  = 0;

    const interval = setInterval(() => {
        count ++;
        subscriber.next(count );
        console.log(count);
    },1000)

    setTimeout(() => {
        subscriber.complete();
    }, 2500)

    return () => {
        clearInterval(interval);
        console.log("Intervalo destrozado");
    }
});


const subs1 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);

subs1.add(subs2);
subs1.add(subs3);

setTimeout(() => {
    subs1.unsubscribe();
}, 3000)