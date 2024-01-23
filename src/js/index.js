// const botoesCarrossel = document.querySelectorAll('.botao');
// const imagens = document.querySelectorAll('.imagem');
// const botaoSelecionado = document.querySelector('.selecionado');
// const imagemAtiva = document.querySelector('.ativa');

// function desativarBotaoSelecionado() {
//     botaoSelecionado.classList.remove('selecionado');
// }
// function esconderImagemAtiva() {
//     esconderImagemAtiva.classList.remove('ativa');
// }
// function selecionarBotaoCarrossel(botao) {
//     botao.classList.add('selecionado');
// }
// function mostrarImagemDeFundo(indice) {
//     imagens[indice].classList.add('ativa');
// }

// botoesCarrossel.forEach((botao, indice) => {
//     botao.addEventListener('click', () => {
        
//         desativarBotaoSelecionado();

//         selecionarBotaoCarrossel(botao);

//         esconderImagemAtiva();

//         mostrarImagemDeFundo(indice);
//     })
// })


const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');


botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {    
        desativarBotaoSelecionado();

        selecionarBotaoCarrosel(botao);

        esconderImagemAtiva();

        mostrarImagemDeFundo(indice);
    })
})

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrosel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}