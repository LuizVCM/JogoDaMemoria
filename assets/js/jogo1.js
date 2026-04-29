const entendo = document.getElementById("entendi");
const anuncio = document.getElementById("anuncio");

const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const card4 = document.getElementById("card4");
const card5 = document.getElementById("card5");
const card6 = document.getElementById("card6");
const card7 = document.getElementById("card7");
const card8 = document.getElementById("card8");
const card9 = document.getElementById("card9");
const card10 = document.getElementById("card10");
const card11 = document.getElementById("card11");
const card12 = document.getElementById("card12");

const tempor = document.getElementById("tempo");

let tempo = 360; // tempo inicial em segundos


entendo.addEventListener("click", ()=>{
    anuncio.style.display = 'none';

    // Cronômetro
    let timer = setInterval(() => {

    tempor.textContent = `${tempo}`
    tempo--;

    if (tempo < 0) {
        clearInterval(timer);
        tempor.textContent = `${tempo}`
    }
}, 1000);

    card1.style.animation = 'rodar1 2.5s forwards';
card1.style.animationDelay = '0.5s';

    card2.style.animation = 'rodar2 2.5s forwards';
    card2.style.animationDelay = '0.75s';

    card3.style.animation = 'rodar3 2.5s forwards';
    card3.style.animationDelay = '1s';

    card4.style.animation = 'rodar4 2.5s forwards';
    card4.style.animationDelay = '1.25s';

    card5.style.animation = 'rodar5 2.5s forwards';
    card5.style.animationDelay = '1.5s';

    card6.style.animation = 'rodar6 2.5s forwards';
    card6.style.animationDelay = '1.75s';

    card7.style.animation = 'rodar7 2.5s forwards';
    card7.style.animationDelay = '2s';

    card8.style.animation = 'rodar8 2.5s forwards';
    card8.style.animationDelay = '2.25s';

    card9.style.animation = 'rodar9 2.5s forwards';
    card9.style.animationDelay = '2.5s';

    card10.style.animation = 'rodar10 2.5s forwards';
    card10.style.animationDelay = '2.75s';

    card11.style.animation = 'rodar11 2.5s forwards';
    card11.style.animationDelay = '3s';

    card12.style.animation = 'rodar12 2.5s forwards';
    card12.style.animationDelay = '3.5s';
})












