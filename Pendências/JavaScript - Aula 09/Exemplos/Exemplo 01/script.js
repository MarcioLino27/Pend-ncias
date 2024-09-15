const botao = document.getElementById('meuBotao');
const mensagemParagrafo = document.getElementById('mensagem');

botao.addEventListener('click', () => { 
    mensagemParagrafo.innerHTML = 'Olá Raama';
});

botao.addEventListener('click', () =>{
    console.log('Botao clicado usando addEventListener');
});