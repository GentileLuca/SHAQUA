let sfocaturaBox = document.querySelectorAll(".sfocaturaBox")
let sfocaturaTitle = document.querySelectorAll(".sfocaturaTitle")
let sfocaturaImg = document.querySelectorAll(".sfocaturaImg")
let utenti = document.querySelectorAll(".utenti")
let controllo = document.querySelectorAll(".color")
let hidden = document.querySelectorAll(".hidden")

for (let i = 0; i < sfocaturaBox.length; i++) {
sfocaturaBox[i].addEventListener('mouseover',function color(){
        sfocaturaBox[i].classList.remove('sfocaturaBox');
        sfocaturaBox[i].classList.add('box');
        sfocaturaTitle[i].classList.remove('sfocaturaTitle')
        sfocaturaTitle[i].classList.add('title')
        sfocaturaImg[i].classList.remove('sfocaturaImg')
        sfocaturaImg[i].classList.add('img')
        utenti[i].classList.remove('sfocaturaBox')
        hidden[i].classList.remove('hidden')
        controllo[i].classList.add('hidden')
    })
}
for (let i = 0; i < sfocaturaBox.length; i++) {
    sfocaturaBox[i].addEventListener('mouseout',function color(){
            sfocaturaBox[i].classList.add('sfocaturaBox');
            sfocaturaBox[i].classList.remove('box');
            sfocaturaTitle[i].classList.add('sfocaturaTitle')
            sfocaturaTitle[i].classList.remove('title')
            sfocaturaImg[i].classList.add('sfocaturaImg')
            sfocaturaImg[i].classList.remove('img')
            hidden[i].classList.add('hidden')
            controllo[i].classList.remove('hidden')
        })
    }