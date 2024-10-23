## 📝 Aula 03: Declare Variáveis no SASS

### Criar e Utilizar Variáveis no SASS para Armazenar Valores

Variáveis no SASS permitem armazenar valores que podem ser reutilizados em todo o código CSS. Isso facilita a manutenção e a consistência do design, já que você pode alterar um valor em um único lugar para atualizar todo o seu projeto.

### Exemplo de Declaração e Uso de Variáveis no SASS

#### Arquivo SASS: `style.scss`

```scss
$corPrincipal: #eee;
$corSecundaria: #111;

body {
  background-color: $corPrincipal;
}

header {
  background-color: $corPrincipal;

  h1 {
    color: $corSecundaria;
  }
}

button {
  padding: 16px;
  background-color: $corSecundaria;
  color: $corPrincipal;

  &:hover {
    background-color: yellow;
  }

  &.sucesso {
    background-color: green;
  }
}
```

### Encapsular Regras e Seletores

Uma das grandes vantagens do SASS é a capacidade de encapsular regras e seletores usando aninhamento. Isso torna o CSS mais legível e fácil de gerenciar.

No exemplo acima, você pode ver como as regras dentro de `header` e `button` são aninhadas, refletindo a estrutura HTML e melhorando a clareza do código.

### Configurar a Compilação Automática do Código SASS para CSS

Para facilitar o desenvolvimento, você pode configurar a compilação automática do código SASS para CSS. Isso garante que cada alteração no arquivo SASS seja refletida imediatamente no CSS compilado.

#### Passos para Configurar a Compilação Automática

1. **Instalar o SASS Globalmente com npm**: Se ainda não instalou, use o comando:

   ```bash
   npm install -g sass
   ```

2. **Utilizar o Modo de Observação**: No terminal, execute o comando:

   ```bash
   sass --watch style.scss:style.css
   ```

Esse comando compilará automaticamente `style.scss` para `style.css` sempre que o arquivo SASS for salvo.

### Exemplo Completo

Vamos criar um exemplo completo que inclui a declaração de variáveis, uso de aninhamento e configuração de compilação automática.

#### Arquivo SCSS: `style.scss`

```scss
$corPrincipal: #eee;
$corSecundaria: #111;

body {
  background-color: $corPrincipal;
}

header {
  background-color: $corPrincipal;

  h1 {
    color: $corSecundaria;
  }
}

button {
  padding: 16px;
  background-color: $corSecundaria;
  color: $corPrincipal;

  &:hover {
    background-color: yellow;
  }

  &.sucesso {
    background-color: green;
  }
}
```

#### Compilar o SCSS para CSS

No terminal, execute:

```bash
sass style.scss style.css
```

#### Código HTML Utilizando o CSS Compilado

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exemplo SASS</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <header>
      <h1>Bem-vindo ao SASS!</h1>
    </header>
    <button>Botão Padrão</button>
    <button class="sucesso">Botão Sucesso</button>
  </body>
</html>
```

### Resumo

Nesta aula, aprendemos a criar e utilizar variáveis no SASS para armazenar valores, o que facilita a manutenção e consistência do design. Também vimos como encapsular regras e seletores usando aninhamento, tornando o código mais legível e organizado. Por fim, configuramos a compilação automática do código SASS para CSS, agilizando o processo de desenvolvimento. Com esses conhecimentos, você pode criar estilos mais eficientes e bem estruturados para seus projetos web.
