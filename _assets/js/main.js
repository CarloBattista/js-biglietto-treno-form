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