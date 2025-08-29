

var contador = document.getElementById("count");
var decrementar = document.getElementById("decrement");
var resetar = document.getElementById("reset");
var incrementar = document.getElementById("increment");

var number = 0;

contador.innerText = number;

decrementar.addEventListener("click", function(){
    number--;
    atualizarContador();
})

incrementar.addEventListener("click", function(){
    number++;
    atualizarContador();
})

resetar.addEventListener("click", function(){
    number = 0;
    atualizarContador();
})

function atualizarContador(){
    contador.innerText = number;
    if(number < 0){
    contador.style.color = "red";
    }else if(number > 0){
        contador.style.color = "green";
    }else {
        contador.style.color = "white";
    }
}
