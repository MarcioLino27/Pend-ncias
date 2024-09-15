function transformarMaiusculas() {
    const input = document.getElementById('palavras').value;
    const lista = input.split(',').map(item => item.trim());

    const listaMaiusculas = lista.map(function(item) {
        return item.toUpperCase();
    });

    document.getElementById("resultado").innerText = listaMaiusculas.join(", ");
}