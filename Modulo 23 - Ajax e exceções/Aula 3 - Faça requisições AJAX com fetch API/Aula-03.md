## Aula 3: Faça Requisições AJAX com Fetch API

### Objetivos

-   Compreender como fazer requisições assíncronas utilizando a Fetch API;
-   Configurar uma requisição com a Fetch API, incluindo o método HTTP e a URL;
-   Entender como tratar e manipular as respostas das requisições Fetch, incluindo o tratamento de erros e exceções.

### Conteúdos Abordados

#### 1. Introdução à Fetch API

A Fetch API é uma interface moderna que vem nativamente no JavaScript para fazer requisições HTTP. Ela substitui métodos mais antigos como `XMLHttpRequest` e é usada para buscar recursos através de URLs, oferecendo uma maneira mais simples e poderosa de realizar requisições assíncronas.

#### 2. Utilizando a Fetch API para Requisições AJAX

Nesta aula, substituímos a utilização do `XMLHttpRequest` e do jQuery com `$.ajax` pela Fetch API para buscar informações de um CEP e preenchê-las automaticamente em um formulário.

**Exemplo de Código com Fetch API:**

```javascript
$(document).ready(function () {
    $("#cep").mask("00000-000")

    $("#btn-buscar-cep").click(function () {
        const cep = $("#cep").val()
        const endpoint = `https://viacep.com.br/ws/${cep}/json`
        const botao = $(this)
        $(botao).find("i").addClass("d-none")
        $(botao).find("span").removeClass("d-none")

        fetch(endpoint)
            .then(function (resposta) {
                return resposta.json()
            })
            .then(function (json) {
                const logradouro = json.logradouro
                const bairro = json.bairro
                const cidade = json.localidade
                const estado = json.uf

                const endereco = `${logradouro}, ${bairro} - ${cidade} / ${estado}`
                $("#endereco").val(endereco)
            })
        setTimeout(function () {
            $(botao).find("i").removeClass("d-none")
            $(botao).find("span").addClass("d-none")
        }, 1000)
    })
})
```

#### 4. Estrutura HTML para Teste

A estrutura HTML permanece a mesma das aulas anteriores, proporcionando um formulário onde o usuário pode inserir o CEP e buscar automaticamente o endereço correspondente.

**Estrutura HTML:**

```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Formulário de Pedido</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" />
    </head>
    <body>
        <div class="container">
            <form>
                <div class="row mt-5">
                    <h4>Dados Básicos</h4>
                </div>
                <div class="row">
                    <div class="col-3">
                        <input type="text" class="form-control" placeholder="Nome" />
                    </div>
                    <div class="col-3">
                        <input type="text" class="form-control" placeholder="Sobrenome" />
                    </div>
                    <div class="col-4">
                        <input type="email" class="form-control" placeholder="E-mail" />
                    </div>
                </div>
                <div class="row mt-3">
                    <h4>Dados da Entrega</h4>
                </div>
                <div class="row mb-5">
                    <div class="col-3 d-flex">
                        <input type="text" class="form-control" id="cep" placeholder="CEP" />
                        <button type="button" class="btn btn-primary ms-1" id="btn-buscar-cep">
                            <i class="bi bi-search"></i>
                            <span class="d-none spinner-border spinner-border-sm"></span>
                        </button>
                    </div>
                    <div class="col-7">
                        <input type="text" class="form-control" placeholder="Endereço" id="endereco" />
                    </div>
                    <div class="col-2">
                        <input type="number" class="form-control" placeholder="Número" />
                    </div>
                </div>
                <button type="submit" class="btn btn-success mt">Enviar Pedido</button>
            </form>
        </div>
        <script src="./jquery.js"></script>
        <script src="./jquery.mask.min.js"></script>
        <script src="./main.js"></script>
    </body>
</html>
```
