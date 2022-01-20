let km = prompt('Quanti km deve fare il passeggero?');


let eta = prompt('Quanti anni ha il passeggero?');


 let costokm= 0.21;
 let sconto= 0;

let prezzo= km * costokm;
console.log(prezzo);

if (eta < 18 ) {
    let sconto = (prezzo * 20) / 100;
    console.log(sconto);
    }

if (eta > 65 ) {
    let sconto = (prezzo * 40) /100;
    console.log(sconto);
}

   
let prezzofinale= prezzo - sconto;
console.log(prezzofinale);