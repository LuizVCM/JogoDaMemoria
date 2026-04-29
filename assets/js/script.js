const botao1 = document.getElementById("escolha1");
const botao2 = document.getElementById("escolha2");
const botao3 = document.getElementById("escolha3");
const todo = document.getElementById("todo");

// Funções que fazem a alteração do elemento e abre outra página
function td1(){
todo.style.animation = 'todo 5s forwards';
setTimeout(() => {
        window.location.href = "../../pages/facil.html";
    }, 4000)
}

 function td2(){
todo.style.animation = 'todo 5s forwards';
setTimeout(function(){
        window.location.href = "../../pages/medio.html";
    }, 4000)
}
function td3(){
todo.style.animation = 'todo 5s forwards';
setTimeout(function(){
        window.location.href = "../../pages/dificil.html";
    }, 4000)
}




botao1.addEventListener("click", td1);
botao2.addEventListener("click", td2);
botao3.addEventListener("click", td3);





