let invia = document.querySelector("#invia");
invia.addEventListener("click", function (e) {
    e.preventDefault();
    let dati = document.querySelectorAll("input")

    if (document.querySelector("#email").value === "" || document.querySelector("#password").value === "" || document.querySelector("#cod").value === "") {
        alert("Inserire dati");
        return;
    }
    if (document.querySelector("#email").value === null || document.querySelector("#password").value === null || document.querySelector("#cod").value === null) {
        alert("Inserire dati");
        return;
    }

    for (let i = 0; i < dati.length; i++) {
            console.log(dati[i]);
    }

    });
