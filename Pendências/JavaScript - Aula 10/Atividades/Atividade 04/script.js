function calcularIMC(peso, altura) {
    const imc = peso / (altura ** 2);
    
    if (imc < 18.5) {
        return `IMC: ${imc.toFixed(2)}. Abaixo do peso.`;
    } else if (imc >= 18.5 && imc < 24.9) {
        return `IMC: ${imc.toFixed(2)}. Peso ideal.`;
    } else if (imc >= 24.9 && imc < 29.9) {
        return `IMC: ${imc.toFixed(2)}. Acima do peso.`;
    } else {
        return `IMC: ${imc.toFixed(2)}. Obesidade.`;
    }
}

function mostrarResultado() {
const peso = parseFloat(document.getElementById('peso').value);
const altura = parseFloat(document.getElementById('altura').value);

const resultado = calcularIMC(peso, altura);
document.getElementById('resultado').textContent = resultado;
}