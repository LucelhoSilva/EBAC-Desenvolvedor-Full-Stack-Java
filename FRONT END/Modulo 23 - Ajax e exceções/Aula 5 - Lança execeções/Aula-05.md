## Aula 5: Lance Exceções

### Objetivos

-   Reconhecer quando e por que lançar exceções é necessário em um aplicativo;
-   Lançar exceções para implementar validações de entrada em um formulário web;
-   Aplicar tratamento de exceções de forma eficaz em seus aplicativos web.

### Conteúdos Abordados

#### 1. Lançamento de Exceções

Lançar exceções é uma prática usada quando você quer forçar a detecção de um erro em seu código. Isso é útil em situações onde determinadas condições devem ser atendidas antes que um processo possa continuar. Se essas condições não forem atendidas, você pode "lançar" uma exceção para interromper a execução e alertar o desenvolvedor ou usuário sobre o problema.

#### 2. Validação de Entrada com Exceções

Nesta aula, usamos a técnica de lançamento de exceções para validar as entradas em um formulário web. Especificamente, lançamos uma exceção se o campo "nome" não estiver preenchido, forçando o usuário a corrigir o erro antes de enviar o formulário.

**Exemplo de Código:**

```javascript
$("#formulario-pedido").submit(function (evento) {
    evento.preventDefault() // Previne o envio padrão do formulário

    // Validação do campo "nome"
    if ($("#nome").val().length == 0) {
        throw new Error("Digite o nome") // Lança uma exceção se o campo estiver vazio
    }

    // Caso a validação seja bem-sucedida, o código continua normalmente
    alert("Formulário enviado com sucesso!")
})
```

#### 3. Aplicação Prática

Neste exemplo, a exceção é lançada quando o campo de nome está vazio. Isso garante que o formulário não seja enviado até que o usuário tenha preenchido todos os campos obrigatórios. Esse tipo de validação é essencial para garantir a integridade dos dados que seu aplicativo manipula.

#### 4. Estrutura HTML para Teste

A estrutura HTML usada nas aulas anteriores pode ser reaproveitada aqui, com a adição de um atributo `id` ao formulário para que ele possa ser referenciado no JavaScript.

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
            <form id="formulario-pedido">
                <div class="row mt-5">
                    <h4>Dados Básicos</h4>
                </div>
                <div class="row">
                    <div class="col-3">
                        <input type="text" class="form-control" id="nome" placeholder="Nome" />
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
