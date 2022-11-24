//Dichiarazione delle variabili
let nome;
let cognome;
let colorePreferito;
let passwordSicurissima;

// 1) Chiedere all'utente il suo nome (e salvarlo in una variabile)

nome = prompt("Inserisci il tuo nome");
console.log(nome);

// 2) Chiedere all'utente il suo cognome (e salvarlo in una variabile)

cognome = prompt("Inserisci il tuo cognome");
console.log(cognome);

// 3) Chiedere all'utente il suo colore preferito (e salvarlo in una variabile)

colorePreferito = prompt("Inserisci il tuo colore preferito");
console.log(colorePreferito);

// 4) Unire le 3 variabili ricevute in input con l'aggiunta di un 21 finale in un unica variabile

passwordSicurissima = nome.concat(cognome).concat(colorePreferito).concat('21');
console.log(passwordSicurissima);

// 5) Stampare la variabile nell'html

document.getElementById('password-utente').innerHTML = passwordSicurissima;