document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    var mensagem = document.getElementById('confirmação');

    if (nome === '' || email === '' || senha === '') {
        mensagem.textContent = 'Todos os campos devem ser preenchidos.';
        mensagem.style.color = 'red';
    } else {
        mensagem.textContent = 'Formulário enviado com sucesso!';
        mensagem.style.color = 'green';
    }
});
