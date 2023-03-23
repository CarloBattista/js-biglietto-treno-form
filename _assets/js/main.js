/*

Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.


MILESTONE 1: ( obbiettivo di ieri )
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, 
andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, 
per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

*/

// function btnSubmit() {
//     const kmDaPercorrere = document.getElementById("inputKm").value;
//     const agePeople = document.getElementById("inputAge").value;
//     let costoAlKM = 0.21;

//     let nomePersona = document.getElementById("inputName").value;

//     if (agePeople < 18) {
//         costoAlKM *= 0.8;
//     } else if (agePeople >= 65) {
//         costoAlKM *= 0.6;
//     }

//     let prezzoFinale = costoAlKM * kmDaPercorrere;

//     document.getElementById("display_price").innerHTML = `${prezzoFinale.toFixed(2).replace(".", ",")} €`;
// }

function btnSubmit() {
    const kmToGo = document.querySelector("#inputKm").value;
    const agePeople = document.querySelector("#inputAge").value;
    let namePeople = document.querySelector("#inputName").value;
    let priceOnKm = 0.21;
    let trainCarriage = Math.floor(Math.random() * 100).toString().padStart(1, "1");
    let cpCode = Math.floor(Math.random() * 10000).toString().padStart(5, "0");

    if (agePeople < 18) {
        priceOnKm *= 0.8;
    } else if (agePeople >= 65) {
        priceOnKm *= 0.6;
    }

    let finalPrice = priceOnKm * kmToGo;

    document.querySelector("#nameSurname").innerHTML = `${namePeople}`;
    document.querySelector("#ticketPrice").innerHTML = `${finalPrice.toFixed(2).replace(".", ",")} €`;
    document.querySelector("#trainCarriage").innerHTML = `${trainCarriage}`;
    document.querySelector("#cpCode").innerHTML = `${cpCode}`;
}