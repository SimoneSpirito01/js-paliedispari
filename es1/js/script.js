
// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

let word = prompt('Inserisci una parola');

while (!isNaN(word)){
    word = prompt('ATTENZIONE! Inserisci una parola');
}

word = word.toLocaleLowerCase();

const palindroma = pal(word);
let x;

if (palindroma){
    x = 'La parola che hai inserito è palindroma'
} else {
    x = 'La parola che hai inserito non è palindroma'
}

document.querySelector('.check').innerHTML = x;

function pal(parola){

    // soluzione 1
    // const revWord = [];
    // for (let i = parola.length - 1; i >= 0; i--){
    //     revWord.push(parola[i]);
    //     console.log(revWord);
    // }
    // if (parola == revWord.join('')){
    //     return true;
    // }
    // return false;

    // soluzione 2
    let x = parola.length
    for (let i = 0; i < x; i++){
        x -= 1;
        if (parola[i] != parola[x]){
            return false;
        }
    }
    return true;
}