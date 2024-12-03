import { asyncScheduler } from 'rxjs';


//setTimeout(() => {}, 1000);
//setInterval(() => {}, 1000);



const saludar = () => console.log("Hola mundo");
const saludar2 = (nombre:string) => console.log(`Hola ${nombre}`);


//EJEMPLOS DE SET TIME OUT
//asyncScheduler.schedule(saludar, 2000);
//asyncScheduler.schedule(saludar2, 2000, 'James');

//EJEMPLOS DE SET INTERVAL
const subs = asyncScheduler.schedule(function(state){
    console.log("state: ", state);
    this.schedule(state + 1, 1000);
}, 3000, 0);


// setTimeout(() => {
//     subs.unsubscribe(); 
// }, 6000)

asyncScheduler.schedule(() => subs.unsubscribe(), 6000);