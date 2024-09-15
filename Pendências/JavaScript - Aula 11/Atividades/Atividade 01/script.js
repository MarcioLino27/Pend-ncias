function mostrarDobro() {
    const numeros = [50, 45, 67, 89, 10, 5];
    const resultado = document.getElementById('resultado');
    
    resultado.innerHTML = '';

    numeros.forEach(numero => {
        const p = document.createElement('p');
        p.textContent = `O dobro de ${numero} é ${numero * 2}`;
        resultado.appendChild(p);
    });
}