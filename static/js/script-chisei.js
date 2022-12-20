    let sfocaturaBox = document.querySelectorAll(".sfocaturaBox")
    let sfocaturaTitle = document.querySelectorAll(".sfocaturaTitle")
    let sfocaturaBottoni = document.querySelectorAll(".sfocaturaBottoni")

for (let i = 0; i < sfocaturaBox.length; i++) {
    sfocaturaBox[i].addEventListener('mouseover',function color(){
            sfocaturaBox[i].classList.remove('sfocaturaBox');
            sfocaturaBox[i].classList.add('box');
            sfocaturaTitle[i].classList.remove('sfocaturaTitle')
            sfocaturaTitle[i].classList.add('title')
            sfocaturaBottoni[i].classList.remove('sfocaturaBottoni')
            sfocaturaBottoni[i].classList.add('bottoni')            
        })
    }
    for (let i = 0; i < sfocaturaBox.length; i++) {
        sfocaturaBox[i].addEventListener('mouseout',function color(){
                sfocaturaBox[i].classList.add('sfocaturaBox');
                sfocaturaBox[i].classList.remove('box');
                sfocaturaTitle[i].classList.add('sfocaturaTitle')
                sfocaturaTitle[i].classList.remove('title')
                sfocaturaBottoni[i].classList.add('sfocaturaBottoni')
                sfocaturaBottoni[i].classList.remove('bottoni')            
            })
        }


let accediUtente = document.querySelector(".logUtente")
let logAmm = document.querySelector(".logAmm")
let regAmm = document.querySelector(".regAmm")

accediUtente.addEventListener('click',function(e){
    e.preventDefault();
    
})

logAmm.addEventListener('click',function(e){
    e.preventDefault();
})

regAmm.addEventListener('click',function(e){
    e.preventDefault();
    console.log("ciao");
})