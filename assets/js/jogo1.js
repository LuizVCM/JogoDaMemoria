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
const card13 = document.getElementById("card13");
const card14 = document.getElementById("card14");
const card15 = document.getElementById("card15");
const card16 = document.getElementById("card16");
const card17 = document.getElementById("card17");
const card18 = document.getElementById("card18");
const card19 = document.getElementById("card19");
const card20 = document.getElementById("card20");
const card21 = document.getElementById("card21");
const card22 = document.getElementById("card22");
const card23 = document.getElementById("card23");
const card24 = document.getElementById("card24");
const card25 = document.getElementById("card25");
const card26 = document.getElementById("card26");
const card27 = document.getElementById("card27");
const card28 = document.getElementById("card28");
const card29 = document.getElementById("card29");
const card30 = document.getElementById("card30");


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

     card13.style.animation = 'rodar13 2.5s forwards';
card13.style.animationDelay = '3.75s';

    card14.style.animation = 'rodar14 2.5s forwards';
    card14.style.animationDelay = '4s';

    card15.style.animation = 'rodar15 2.5s forwards';
    card15.style.animationDelay = '4.25s';

    card16.style.animation = 'rodar16 2.5s forwards';
    card16.style.animationDelay = '4.5s';

    card17.style.animation = 'rodar17 2.5s forwards';
    card17.style.animationDelay = '4.75s';

    card18.style.animation = 'rodar18 2.5s forwards';
    card18.style.animationDelay = '5s';

    card19.style.animation = 'rodar19 2.5s forwards';
    card19.style.animationDelay = '5.25s';

    card20.style.animation = 'rodar20 2.5s forwards';
    card20.style.animationDelay = '5.5s';

    card21.style.animation = 'rodar21 2.5s forwards';
    card21.style.animationDelay = '5.75s';

    card22.style.animation = 'rodar22 2.5s forwards';
    card22.style.animationDelay = '6s';

    card23.style.animation = 'rodar23 2.5s forwards';
    card23.style.animationDelay = '6.25s';

    card24.style.animation = 'rodar24 2.5s forwards';
    card24.style.animationDelay = '6.5s';

     card25.style.animation = 'rodar25 2.5s forwards';
card25.style.animationDelay = '6.75s';

    card26.style.animation = 'rodar26 2.5s forwards';
    card26.style.animationDelay = '7s';

    card27.style.animation = 'rodar27 2.5s forwards';
    card27.style.animationDelay = '7.25s';

    card28.style.animation = 'rodar28 2.5s forwards';
    card28.style.animationDelay = '7.5s';

    card29.style.animation = 'rodar29 2.5s forwards';
    card29.style.animationDelay = '7.75s';

    card30.style.animation = 'rodar30 2.5s forwards';
    card30.style.animationDelay = '8s';

})

// Lógica de cartas ao clicar
let primeiraCarta = null;
let segundaCarta = null;

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    if (card === primeiraCarta) return;

    // Mostra a carta (você pode trocar por classe CSS)
    card.classList.add('virada');

    if (!primeiraCarta) {
      primeiraCarta = card;
    } else {
      segundaCarta = card;

      // Verifica se o ID é igual
      if (primeiraCarta.dataset.id === segundaCarta.dataset.id) {
        // Par encontrado
        primeiraCarta.classList.add('acertou');
        segundaCarta.classList.add('acertou');
        resetarSelecao();
      } else {
        // Não é par → vira de volta depois de 1s
        setTimeout(() => {
          primeiraCarta.classList.remove('virada');
          segundaCarta.classList.remove('virada');
          resetarSelecao();
        }, 1000);
      }
    }
  });
});

function resetarSelecao() {
  primeiraCarta = null;
  segundaCarta = null;
}












