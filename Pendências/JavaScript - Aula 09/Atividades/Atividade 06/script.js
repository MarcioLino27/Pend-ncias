const botaoCalculo = document.getElementById('calculo');
const resultado = document.getElementById('resultado');

function calcularValores() {
    const valorA = parseFloat(document.getElementById('inputValorA').value)
    const valorB = parseFloat(document.getElementById('inputValorB').value)

    if (isNaN(valorA) || isNaN(valorB)) {
        console.log('Por favor, insira valores numéricos válidos.');
        return;
    }

    const valorC = valorA + valorB

    console.log('Valor A =', valorA)
    console.log('Valor B =', valorB)
    console.log('Resultado =', valorC)

    resultado.textContent = 'Resultado = ' + valorC
};

botaoCalculo.addEventListener('click', calcularValores);