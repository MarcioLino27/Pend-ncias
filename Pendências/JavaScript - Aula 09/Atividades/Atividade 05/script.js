document.addEventListener('DOMContentLoaded', function() {
    const lampada = document.getElementById('lampada');
    lampada.addEventListener('mouseover', function() {
        lampada.src = 'Imagens/Lampada ligada.png';
    });
});