function adicionarParagrafo() {
    const novoParagrafo = document.createElement("p");

    novoParagrafo.textContent = "Este é um novo parágrafo adicionado ao cliclar no botão.";

    const texto = document.getElementById("texto");
    texto.appendChild(novoParagrafo);
};