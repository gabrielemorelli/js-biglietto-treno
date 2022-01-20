let km = prompt('Quanti km deve fare il passeggero?');


let eta = prompt('Quanti anni ha il passeggero?');


 let costokm= 0.21;
 let prezzo= km * costokm;

if (eta < 18 ) {
    var sconto = (km * costokm * 20) / 100;
    console.log(sconto);
    document.getElementById('sconto').innerHTML = "Hai diritto allo sconto del 20% " 
    }

 else if (eta > 65 ) {
    var sconto = (km * costokm * 40) /100;
    console.log(sconto);
    document.getElementById('sconto').innerHTML = "Hai diritto allo sconto del 40% " 
}


else{
    var sconto=0;
 }
   
let prezzofinale= prezzo - sconto;
console.log(prezzofinale);
document.getElementById('prezzo').innerHTML = "il prezzo del biglietto è di " + prezzofinale.toFixed(2);