/*
Descrizione:
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

/*
- Chiedo il numero di km all'utente
- Chiedo l'età all'utente
- Calcolo il prezzo del biglietto senza sconti, km * 0.21€
? SE l'utente è minorenne (<18) 
  ° applico uno sconto del 20%
:? ALTRIMENTI SE l'utente è over 65 (>65)
  ° applico uno sconto del 40%
:  ALTRIMENTI 
  ° applico il prezzo intero
- Stampo il prezzo finale con massimo due decimali
*/

// let userTripKm = parseInt(prompt("Inserisci il numero di chilometri che vuoi percorrere"));
//   // console.log(userTripKm);

// let userAge = parseInt(prompt("Inserisci la tua età"));
//   // console.log(userAge);

// let ticketPriceFull = (userTripKm * 0.21).toFixed(2);
//   // console.log(ticketPriceFull);

// let ticketPrice20Discount = (ticketPriceFull - ((ticketPriceFull / 100) * 20)).toFixed(2);
//   // console.log(ticketPrice20Discount);

// let ticketPrice40Discount = (ticketPriceFull - ((ticketPriceFull / 100) * 40)).toFixed(2);
//   // console.log(ticketPrice40Discount);

// if (userAge < 18) {

//   // console.log(ticketPrice20Discount);
//   document.writeln(`
//   Il prezzo del biglietto intero è di ${ticketPriceFull + " €"}.
//   Essendo minore di 18 anni ha diritto ad uno sconto del 20%.
//   Il prezzo finale del biglietto scontato è di ${ticketPrice20Discount + " €"}`)

// } else if (userAge > 65) {

//   // console.log(ticketPrice40Discount);
//   document.writeln(`
//   Il prezzo del biglietto intero è di ${ticketPriceFull + " €"}.
//   Essendo over 65 ha diritto ad uno sconto del 40%.
//   Il prezzo finale del biglietto scontato è di ${ticketPrice40Discount + " €"}`)

// } else {

//   // console.log(ticketPriceFull);
//   document.writeln(`
//   Il prezzo del biglietto intero è di ${ticketPriceFull + " €"}.
//   Non hai diritto a sconti.. sfigato!`)

// }


let userTripKmEl = document.getElementById