// usando ajax com XMLHttpRequest
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn-buscar-cep').addEventListener('click', function() {
        // AJAX asynchronous JavaScript and XML
        const xhttp = new XMLHttpRequest();
        const cep = document.getElementById('cep').value;
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;

        xhttp.open('GET', endpoint);
        xhttp.send();
    })
})

// usando ajax com jQuery
$(document).ready(function () {
    $('#cep').mask('00000-000');

    $('#btn-buscar-cep').click(function () {
        const cep = $('#cep').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;
        const botao = $(this); // usa o this para nao ficar repetindo o codigo #btn-buscar-cep
        $(botao).find('i').addClass('d-none'); 
        $(botao).find('span').removeClass('d-none');

        $.ajax(endpoint).done(function (resposta) {
            const logradouro = resposta.logradouro;
            const bairro = resposta.bairro;
            const cidade = resposta.localidade;
            const estado = resposta.uf;

            const endereco = `${logradouro}, ${bairro} - ${cidade} / ${estado}`
            $('#endereco').val(endereco);

            setTimeout(function () {
                $(botao).find('i').removeClass('d-none');
                $(botao).find('span').addClass('d-none');
            }, 1000);
        })
    })
})
