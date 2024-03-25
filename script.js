//const= elementen die worden gelinkt aan functies

const startknop = document.querySelector('#start');
const resetknop = document.querySelector('#reset');
const div = document.querySelector('div');
const mario = document.querySelector('#mario');
const goomba = document.querySelector('#goomba');
const coin = document.querySelector('#coin');
const soundEffect = document.querySelector('#soundEffect');
const veranderKnop = document.querySelector('#veranderAfbeeldingKnop');

//brent de gehele animatie in beeld
function zetInBeeld(){
    console.log('Super Mario')
    div.classList.add('in_beeld')
}


function zetUitBeeld(){
    div.classList.add('uit_beeld')
}


function marioOmhoog () {
    mario.classList.add('uit_beeld')
}

function marioOmlaag () {
    mario.classList.remove('uit_beeld')
}


// chat gpt prompt: Hoe laat ik mario na 5x springen stoppen?

let sprongen = 0;

// Deze interval moet buiten de functie gedeclareerd worden om toegankelijk te zijn voor clearInterval.
let marioSpringtInterval = setInterval(VerdwijnEnVerschijn, 2000);

function VerdwijnEnVerschijn() {
    if (sprongen < 5) {
        mario.classList.toggle('uit_beeld'); // Laat Mario springen
        sprongen++; // Verhoog de sprongenteller
        soundEffect.play();
    } else {
        clearInterval(marioSpringtInterval); 
    }
}

//laat mario veranderen naar fire mario met een knopje
function veranderAfbeelding() {
    if (mario.src.includes("SMBW_Mario_Jump.webp")) {
        mario.src = "img/firemario.webp"; 
    } else {
        mario.src = "img/SMBW_Mario_Jump.webp";
    }
}

// Voegt een click event listener toe aan de knop
veranderKnop.addEventListener('click', veranderAfbeelding);


// laat goomba animeren vanuit links naar rechts
goomba.addEventListener('click', function() {
    goomba.classList.add('goomba_ren');
});

mario.addEventListener('click', marioOmhoog)
mario.addEventListener('transitionend',marioOmlaag)
window.addEventListener('keydown', marioOmhoog)

startknop.addEventListener('click' , zetInBeeld)



