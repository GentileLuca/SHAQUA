let invia = document.querySelector("#invia");
invia.addEventListener("click", function (e) {
    e.preventDefault();
    let dati = document.querySelectorAll("input")
    let codDestinatario = dati[4].value
    if (codDestinatario.length!=7){
        allert("Codice non valido")
    }
    let controlloCodDestinatario = dati[6].value
    if (codDestinatario!=controlloCodDestinatario){
        alert("I codici non coincidono")
    }
    let mail = dati[1].value
    if(mail===""|| mail===" "){
        alert("Inserire una mail valida")
    }
    let controlloMail = dati[3].value
    if (mail!=controlloMail){
        alert("Le mail non coincidono")
    }
    let psw = dati[5].value
    if(psw===""|| psw===" "){
        alert("Inserire una password valida")
    }
    let controlloPsw = dati[7].value
    if (psw!=controlloPsw){
        alert("Le password non coincidono")
    }


    console.log(codDestinatario, controlloCodDestinatario, mail, controlloMail, psw, controlloPsw)

    console.log(dati)
    });
