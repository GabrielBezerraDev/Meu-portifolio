const abas = document.querySelectorAll(".aba");

abas.forEach (aba => {
    aba.addEventListener("click", function() {

        if(aba.classList.contains("selecionado")){
            return;
        }

        selecionarAba(aba)
        mostrarInformacoesDaAba(aba)
    });
});

function selecionarAba(aba) {
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado");

    aba.classList.add("selecionado");
};

function mostrarInformacoesDaAba(aba){
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");

    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`

    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
    informacaoASerMostrada.classList.add("selecionado")
};

function coin() {
    document.getElementById('move').style.transform = 'translateX(-160%)';
    document.getElementById('move').style.transition = '2s';
    
        let animacao = document.getElementsByClassName('novo') 
            for (let i = 0; i < animacao.length; i++) {
                return [animacao[i].style.height = '493px', animacao[i].style.transition = '2s', 
                animacao[i].style.transitionDelay = '2s', animacao[i].style.color = '#02d08f', animacao[i].style.opacity = '1', animacao[i].style.transform = 'translate(70%)']

}

}   

/* O CÓDIGO QUE DEU CERTO: */
function projeto1() {
    let projeto11 = document.getElementById('formulario');
    let projeto1 = document.querySelectorAll('.amostra');
    if 
        (projeto11.classList.contains('mostrar')) {
            return;}
    else
         {
         projeto1[1].style.display = 'none';
         projeto1[2].style.display = 'none';
         projeto1[0].style.display = 'block';
};
}

function projeto2 () {
    let projeto22 = document.getElementById('catalogos');
    let projeto1 = document.querySelectorAll('.amostra');
    if 
        (projeto22.classList.contains('mostrar')) {
            return;}
    else 
         {
          projeto1[0].style.display = 'none';
          projeto1[2].style.display = 'none';
          projeto1[1].style.display = 'block';
        }

        }

function projeto3() {
    let projeto33 = document.getElementById('catalogos');
    let projeto1 = document.querySelectorAll('.amostra');
    if 
        (projeto33.classList.contains('mostrar')) {
                return;}
    else
        {
        projeto1[0].style.display = 'none';
        projeto1[1].style.display = 'none';
        projeto1[2].style.display = 'block';
    }
}


/* TENTATIVAS DO CÓDIGO:
function teste() {
    let mundaca = document.getElementsByClassName('projeto') 
            for (let i = 0; i < mundaca.length; i++) {
            [mundaca[i].style.display = 'block']
}
}
*/




/*
function projeto1() {
        if (projeto1.style.di(block)) {
            return;} 
        else {
            projeto1.style.display = block;
            projeto2.style.display = none;
            projeto3.style.display = none;
        }
}

function projeto2() {
    if (projeto2.style.display(block)) {
        return;} 
    else {
        projeto1.style.display = none;
        projeto2.style.display = block;
        projeto3.style.display = none;
    }
}

function projeto3() {
    if (projeto3.style.display(block)) {
        return;} 
    else {
        projeto1.style.display = none;
        projeto2.style.display = none;
        projeto3.style.display = block;
    }
}
*/



    

