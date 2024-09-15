const citacoes = [
    "A vida é 10% o que acontece com você e 90% como você reage a isso.",
    "O único lugar onde o sucesso vem antes do trabalho é no dicionário.",
    "Você não pode mudar o vento, mas pode ajustar as velas.",
    "A melhor maneira de prever o futuro é criá-lo.",
    "A felicidade não é algo pronto. Ela vem de suas próprias ações."
];

const estilos = [
    { color: '#333', border: '2px solid #333' },
    { color: '#fff', backgroundColor: '#007bff' },
    { color: '#ff5722', fontStyle: 'italic' },
    { color: '#4caf50', fontWeight: 'bold' },
    { color: '#9c27b0', border: '2px dashed #9c27b0' }
];

document.getElementById('gerarCitacao').addEventListener('click', function() {
    const citacaoAleatoria = citacoes[Math.floor(Math.random() * citacoes.length)];
    const estiloAleatorio = estilos[Math.floor(Math.random() * estilos.length)];

    const elementoCitacao = document.getElementById('citacao');
    elementoCitacao.textContent = citacaoAleatoria;

    Object.assign(elementoCitacao.style, estiloAleatorio);
});
