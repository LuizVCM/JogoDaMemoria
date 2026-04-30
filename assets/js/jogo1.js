const entendo = document.getElementById("entendi");
const anuncio = document.getElementById("anuncio");
const cards = document.querySelectorAll(".card");
const tempor = document.getElementById("tempo") || document.getElementById("tempo2") || document.getElementById("tempo3");
const pontosDisplay = document.querySelector(".pontos span");
const btnReiniciar = document.querySelector(".reiniciar") || document.getElementById("reinicio");

let tempo = 360; 
let timer;
let primeiraCarta = null;
let segundaCarta = null;
let bloqueio = false;

//Sistema de Pontos e Estatísticas
let pontos = 0;
let acertos = 0;
let erros = 0;
let paresEncontrados = 0;
const totalPares = cards.length / 2;

const imgVerso = "https://t3.ftcdn.net/jpg/16/07/35/88/360_F_1607358889_QAaFtq7O44XVn7RT4S5Cbc4yOZTwIXGj.jpg";

const extensoes = {
    "alice": "jpg",
    "ashley": "png",
    "chris": "png",
    "dimetrescu": "webp",
    "ethan": "jpg",
    "grace": "webp",
    "jill": "webp",
    "leon": "png",
    "lycan": "webp",
    "miranda": "jpg",
    "mrx": "png",
    "perseguidora": "jpg",
    "rebecca": "webp",
    "victor": "webp",
    "wesker": "webp",
};

//Função para iniciar o jogo
entendo.addEventListener("click", () => {
    anuncio.style.display = 'none';

    //Cronômetro
    timer = setInterval(() => {
        let minutos = Math.floor(tempo / 60);
        let segundos = tempo % 60;
        if(tempor) tempor.textContent = `${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
        
        if (tempo <= 0) {
            clearInterval(timer);
            finalizarJogo("O tempo acabou!");
        }
        tempo--;
    }, 1000);

    //Animação inicial
    cards.forEach((card, index) => {
        const idNum = index + 1;
        card.style.animation = `rodar${idNum} 2.5s ease`;
        card.style.animationDelay = `${index * 0.1}s`;
    });

    //Habilita o jogo após a animação
    setTimeout(() => {
        cards.forEach(card => card.addEventListener("click", virarCarta));
    }, 4500);
});

//Configuração do Botão Reiniciar
if (btnReiniciar) {
    btnReiniciar.addEventListener("click", () => {
        location.reload();
    });
    btnReiniciar.style.cursor = "pointer";
}

function virarCarta() {
    if (bloqueio) return;
    if (this === primeiraCarta) return;
    if (this.classList.contains("acertou")) return;

    const personagem = this.dataset.par;
    const ext = extensoes[personagem] || "jpg";
    const imgCaminho = `../assets/images/${personagem}.${ext}`;

    this.style.transform = "rotate(360deg)";
    this.style.backgroundImage = `url("${imgCaminho}")`;
    this.classList.add("virado");

    if (!primeiraCarta) {
        primeiraCarta = this;
        return;
    }

    segundaCarta = this;
    verificarPar();
}

function verificarPar() {
    let isMatch = primeiraCarta.dataset.par === segundaCarta.dataset.par;

    if (isMatch) {
        processarAcerto();
    } else {
        processarErro();
    }
}

function processarAcerto() {
    acertos++;
    pontos += 10;
    paresEncontrados++;
    atualizarPlacar();

    primeiraCarta.classList.add("acertou");
    segundaCarta.classList.add("acertou");
    
    resetarTabuleiro();

    if (paresEncontrados === totalPares) {
        clearInterval(timer);
        setTimeout(() => {
            finalizarJogo("Parabéns! Você encontrou todos os pares!");
        }, 500);
    }
}

function processarErro() {
    erros++;
    pontos = Math.max(0, pontos - 3);
    atualizarPlacar();
    
    bloqueio = true;
    setTimeout(() => {
        primeiraCarta.style.transform = "rotate(0deg)";
        primeiraCarta.style.backgroundImage = `url("${imgVerso}")`;
        primeiraCarta.classList.remove("virado");

        segundaCarta.style.transform = "rotate(0deg)";
        segundaCarta.style.backgroundImage = `url("${imgVerso}")`;
        segundaCarta.classList.remove("virado");

        resetarTabuleiro();
    }, 1000);
}

function atualizarPlacar() {
    if (pontosDisplay) {
        pontosDisplay.textContent = pontos;
    }
}

function finalizarJogo(mensagem) {
    alert(`${mensagem}\n\n--- RESUMO DO JOGO ---\nPontuação Final: ${pontos}\nTotal de Acertos: ${acertos}\nTotal de Erros: ${erros}`);
}

function resetarTabuleiro() {
    [primeiraCarta, segundaCarta] = [null, null];
    bloqueio = false;
}
