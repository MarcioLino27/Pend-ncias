function estilizarParagrafo() {
    const cor = document.getElementById('corInput').value;

    const paragrafo = document.getElementById('paragrafo');
    paragrafo.style.color = cor;

    cor.value - '';
};

const esilizarBotao = document.getElementById('estilizarBotao');
esilizarBotao.addEventListener('click', estilizarParagrafo);