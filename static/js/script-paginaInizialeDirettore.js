let sfocaturaBox = document.querySelectorAll(".sfocaturaBox")
let sfocaturaTitle = document.querySelectorAll(".sfocaturaTitle")
let sfocaturaImg = document.querySelectorAll(".sfocaturaImg")

for (let i = 0; i < sfocaturaBox.length; i++) {
sfocaturaBox[i].addEventListener('mouseover',function color(){
        sfocaturaBox[i].classList.remove('sfocaturaBox');
        sfocaturaBox[i].classList.add('box');
        sfocaturaTitle[i].classList.remove('sfocaturaTitle')
        sfocaturaTitle[i].classList.add('title')
        sfocaturaImg[i].classList.remove('sfocaturaImg')
        sfocaturaImg[i].classList.add('img')
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
        })
    }