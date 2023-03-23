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

function btnSubmit() { // Al click del bottone esegue queste funzione
    const kmDaPercorrere = document.getElementById("kmDaPercorrere").value;
    const agePeople = document.getElementById("agePeople").value;
    let costoAlKM = 0.21; // Costo del biglietto in base ai km

    if (agePeople < 18) { // Se la persona che acquista il biglietto ha meno di 18 anni, gli sarà applicato uno sconto del 20%
        costoAlKM *= 0.8;
    } else if (agePeople >= 65) { // Altrimenti Se la persona che acquista il biglietto ha più di 65 anni, gli sarà applicato uno sconto del 40%
        costoAlKM *= 0.6;
    }

    let prezzoFinale = costoAlKM * kmDaPercorrere; // Moltiplicazione costo del km * i km da percorrere

    document.getElementById("display_price").innerHTML = `${prezzoFinale.toFixed(2).replace(".", ",")} €`; // Visualizza dentro il div display price il prezzo finale con massimo due numeri decimali + sostituisci il punto con la virgola
}