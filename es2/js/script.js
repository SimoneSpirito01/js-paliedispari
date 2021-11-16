
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

let pariDispariUser = prompt('Scegli tra pari e dispari');
pariDispariUser = pariDispariUser.toLocaleLowerCase();

while (pariDispariUser != 'pari' && pariDispariUser != 'dispari'){
    pariDispariUser = prompt('ATTENZIONE! Scegli tra pari e dispari');
}
document.querySelector('.pardisp').innerHTML = "L'utente ha scelto: " + pariDispariUser;

let numeroUser = parseInt(prompt('Inserisci un numero da 1 a 5'));

while (isNaN(numeroUser) || numeroUser < 1 || numeroUser > 5){
    numeroUser = parseInt(prompt('ATTENZIONE! Inserisci un numero da 1 a 5'));
}

console.log(numeroUser);
document.querySelector('.numero-user').innerHTML = "Il numero digitato dall'utente è: " + numeroUser;

let numeroPc = getRndInteger(1,5);
console.log(numeroPc);
document.querySelector('.pc').innerHTML = "Il numero dato al pc è: " + numeroPc;

const somma = numeroUser + numeroPc;

const pariDispari = checkPari(somma);
let x;

if (pariDispariUser == pariDispari){
    x = 'La somma dei due numeri è ' + pariDispari + ", il vincitore è: L'Utente";
} else {
    x = 'La somma dei due numeri è ' + pariDispari + ", il vincitore è: Il Computer";
}

document.querySelector('.check').innerHTML = x;

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function checkPari(num){
    if (num % 2 == 0){
        return 'pari';
    }
    return 'dispari';
}

