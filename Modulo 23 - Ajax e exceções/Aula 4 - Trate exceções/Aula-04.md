## Aula 4: Trate Exceções

### Objetivos

-   Entender o conceito de exceções e como elas representam erros na execução de um programa;
-   Implementar tratamento de erros comuns;
-   Aplicar tratamento de exceções em chamadas AJAX.

### Conteúdos Abordados

#### 1. Conceito de Exceções

Exceções são eventos que ocorrem durante a execução de um programa que interrompem o fluxo normal das instruções. Elas representam erros que precisam ser tratados para que o programa possa continuar a funcionar corretamente.

#### 2. Tratamento de Erros Comuns

O tratamento de erros envolve a captura de exceções para evitar que o programa pare abruptamente. Isso permite ao desenvolvedor criar respostas apropriadas para erros inesperados, como exibir mensagens de alerta ao usuário ou realizar ações de recuperação.

#### 3. Aplicando Tratamento de Exceções em Chamadas AJAX

Nesta aula, adicionamos o tratamento de exceções ao código de requisição AJAX utilizando a Fetch API. Utilizamos o método `.catch()` para capturar erros e o método `.finally()` para executar código que deve ser rodado independentemente do sucesso ou falha da requisição.

**Exemplo de Código com Tratamento de Exceções:**

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
            .catch(function (error) {
                alert("Erro ao buscar CEP")
            })
            .finally(function () {
                setTimeout(function () {
                    $(botao).find("i").removeClass("d-none")
                    $(botao).find("span").addClass("d-none")
                }, 1000)
            })
    })
})
```

#### 4. Estrutura HTML para Teste

A estrutura HTML permanece a mesma das aulas anteriores, proporcionando um formulário onde o usuário pode inserir o CEP e buscar automaticamente o endereço correspondente. Agora, com a adição do tratamento de exceções, o código é mais robusto e pode lidar melhor com possíveis falhas na requisição.

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
