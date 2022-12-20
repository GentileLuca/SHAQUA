/*let invia = document.querySelector("#invia");
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
*/


function valida() {
   
   var email = document.invio.email.value;
   var password = document.invio.password.value;

   var email_valid = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-]{2,})+.)+([a-zA-Z0-9]{2,})+$/;
   if (!email_valid.test(email) || (email == "") || (email == "undefined")) 
   {
      alert("Devi inserire un indirizzo mail corretto");
      document.invio.email.focus();
      return false;
   }
  if (password.length < 6 || (password == "") || (password == "undefined") ) 
   {
    alert("Scegli una password, minimo 6 caratteri");
    document.invio.password.focus();
    return false;
   }
    else {
      document.invio.action = "#"; 
      document.invio.submit();
   }
}