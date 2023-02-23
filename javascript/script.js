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

let userTripKmEl = document.getElementById("userTripKm");
let userAge = document.getElementById("userAge");
let userNameSurname = document.getElementById("userNameSurname");
let userInfoButton = document.getElementById('userInfoBtn');
let resetUserInfoButton = document.getElementById('resetUserInfoBtn');


let pricePerKm = 0.21
let baseTicketPrice;
let finalPrice;


userInfoButton.addEventListener('click', function() {
  // tutto il codice che vogliamo eseguire all'occorrenza dell'evento
  console.log(userTripKmEl.value);
  console.log(userAge.value);
  console.log(userNameSurname.value);

  if (userAge.value < 18) {
    let baseTicketPrice = (userTripKmEl.value * pricePerKm);
    let finalPrice = (baseTicketPrice - baseTicketPrice / 100 * 20).toFixed(2) + "€";

    console.log("prezzo scontato under18: " + finalPrice);

    document.getElementById("insertUserName").innerHTML = userNameSurname.value;
    document.getElementById("insertTicketPrice").innerHTML = finalPrice;


  } else if (userAge.value > 65) {
    
    let baseTicketPrice = (userTripKmEl.value * pricePerKm);
    let finalPrice = (baseTicketPrice - baseTicketPrice / 100 * 40).toFixed(2) + "€";

    console.log("prezzo scontato over65: " + finalPrice);

    document.getElementById("insertUserName").innerHTML = userNameSurname.value;
    document.getElementById("insertTicketPrice").innerHTML = finalPrice;

  } else {

    let baseTicketPrice = (userTripKmEl.value * pricePerKm);
    let finalPrice = (baseTicketPrice).toFixed(2) + "€";
    
    console.log("prezzo: " + finalPrice);

    document.getElementById("insertUserName").innerHTML = userNameSurname.value;
    document.getElementById("insertTicketPrice").innerHTML = finalPrice;

  }
});


resetUserInfoButton.addEventListener('click', function() {
  // tutto il codice che vogliamo eseguire all'occorrenza dell'evento
  document.getElementById("insertUserName").innerHTML = "";
  document.getElementById("insertTicketPrice").innerHTML = "";
  document.getElementById("userNameSurname").value = "";
  document.getElementById("userTripKm").value = "";
  document.getElementById("userAge").value = "";

});
