function adicionarTexto() {
    const input = document.getElementById('meuImput').value; 

    if (input.trim() !== "") {
        const li = document.createElement("li");
        li.textContent = input;

        document.getElementById('lista').appendChild(li)

        document.getElementById('meuImput').value = "";
    }
};