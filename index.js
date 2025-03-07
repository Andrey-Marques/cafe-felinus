const cardapioGatos = document.querySelectorAll(".gatos");
var gatoSelecionado = document.querySelector(".gato-selecionado");
var gatoAtual = 1;

function atualizarListener(){

    cardapioGatos.forEach((gato, index) => {
        gato.removeEventListener("click", avancar);
        cardapioGatos[gatoAtual]?.removeEventListener("click", voltar);
        cardapioGatos[gatoAtual - 1]?.addEventListener("click", voltar);
        if (index === gatoAtual + 1) {
            gato.addEventListener("click", avancar);
            
        }
    });
}
function avancar(event) {
    event.preventDefault();
    
    if(gatoAtual >= 0 && gatoAtual<cardapioGatos.length-1){
        if(gatoAtual!=0){
            cardapioGatos[gatoAtual-1].classList.remove("gato-selecionado")
            cardapioGatos[gatoAtual-1].classList.add("escondidos")
            cardapioGatos[gatoAtual-1].classList.remove("gato-anterior")
        }
        cardapioGatos[gatoAtual].classList.remove("gato-selecionado")
        cardapioGatos[gatoAtual].classList.add("gato-anterior")
        cardapioGatos[gatoAtual].classList.add("gatos-secundarios")
        cardapioGatos[gatoAtual+1].classList.remove("gato-posterior")
        cardapioGatos[gatoAtual+1].classList.remove("gatos-secundarios")
        cardapioGatos[gatoAtual+1].classList.add("gato-selecionado")
        if(gatoAtual!=cardapioGatos.length-2){
            cardapioGatos[gatoAtual+2].classList.remove("escondidos")
            cardapioGatos[gatoAtual+2].classList.add("gato-posterior")
            cardapioGatos[gatoAtual+2].classList.add("gatos-secundarios")
        }
        gatoAtual++;
    }
    atualizarListener();
};

function voltar(event){
    event.preventDefault();
    if(gatoAtual>1){
        cardapioGatos[gatoAtual-2].classList.remove("escondidos")
        cardapioGatos[gatoAtual-2].classList.add("gato-anterior")
        cardapioGatos[gatoAtual-2].classList.add("gatos-secundarios")
        cardapioGatos[gatoAtual-1].classList.add("gato-selecionado")
        cardapioGatos[gatoAtual-1].classList.remove("gato-anterior")
        cardapioGatos[gatoAtual-1].classList.remove("gatos-secundarios")
        cardapioGatos[gatoAtual].classList.remove("gato-selecionado")
        cardapioGatos[gatoAtual].classList.add("gato-posterior")
        cardapioGatos[gatoAtual].classList.add("gatos-secundarios")
        if(gatoAtual!=cardapioGatos.length-1){
            cardapioGatos[gatoAtual+1].classList.remove("gato-posterior")
            cardapioGatos[gatoAtual+1].classList.remove("gatos-secundarios")
            cardapioGatos[gatoAtual+1].classList.add("escondidos")
        }
        gatoAtual--
        
    }
    else{
        cardapioGatos[gatoAtual-1].classList.add("gato-selecionado")
        cardapioGatos[gatoAtual-1].classList.remove("gato-anterior")
        cardapioGatos[gatoAtual-1].classList.remove("gatos-secundarios")
        cardapioGatos[gatoAtual].classList.remove("gato-selecionado")
        cardapioGatos[gatoAtual].classList.add("gato-posterior")
        cardapioGatos[gatoAtual].classList.add("gatos-secundarios")
        gatoAtual--
        console.log(gatoAtual)
    }
    atualizarListener();
}
atualizarListener();

