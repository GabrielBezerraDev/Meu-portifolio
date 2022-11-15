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
/* Refatoração do código das Abas */
let projetos = document.querySelectorAll('.projeto')

projetos.forEach(projeto => { 
    projeto.addEventListener('click' , () => {
        if(projeto.classList.contains('mostrar')){
            return;
        }
        else {
            mudarDeAba(projeto)
        }
function mudarDeAba(secao) {
    let tirarMostrar = document.querySelector('.trabalho.esconder.mostrar');
    tirarMostrar.classList.remove('mostrar')
    
    let botarMostrar = `clica-${secao.id}`;
    let aparecer = document.getElementById(botarMostrar);
    aparecer.classList.add('mostrar');

}
    } )
})

