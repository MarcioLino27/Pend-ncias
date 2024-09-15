const input = document.getElementById('meuInput');
input.addEventListener('input', (event) => {
    console.log('Texto digitado: ${event.target.value}');
});