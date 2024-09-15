document.getElementById('botao').addEventListener('click', function() {
    var inputValue = document.getElementById('texto').value;

    if (inputValue.trim() !== '') {

        var newElement = document.createElement('p');
        newElement.textContent = inputValue;

        document.body.appendChild(newElement);

        document.getElementById('texto').value = '';
    }
});
