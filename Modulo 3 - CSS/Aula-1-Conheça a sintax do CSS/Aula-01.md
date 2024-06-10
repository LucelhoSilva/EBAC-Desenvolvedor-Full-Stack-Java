## 📝 Aula 01: Sintaxe

### ✅ Sintaxe do CSS

No CSS trabalhando com seletores, propriedades e seus valores.

Uma sentença CSS é iniciada com { e concluída com }

```
Seletor {
propriedade: valor;
}
```

Exemplo de CSS funcional:

```
h1 {
font-size: 24px;
}
```

<br>

### ✅ Formas de adicionar estilo ao HTML

Podemos adicionar o CSS a nossa página HTML de três formas:

1. Diretamente nas tags, através do atributo style–CSS inline;

2. Na head, escrevendo o CSS dentro da tagstyle;

3. Importando o arquivo CSS.

Exemplo 1:

```
<h1 style=“font-size: 24px”>Olá CSS</h1>
```

<br>

### ✅ Formas de adicionar estilo ao HTML

Exemplos

Exemplo 1 – CSS Inline:

```
<h1 style=“font-size: 24px”>Olá CSS</h1>
```

Exemplo 2 –Na head:

```
<head>
    <style>
        h1 {
        font-size: 22px;
        }
    </style>
</head>
```

Exemplo 3 –Importando o arquivo:

```
<head>
    <link rel=“stylesheet” href=“meu_arquivo.css” />
</head>
```

<br>

[Material](<./Conheça a sintaxe do CSS.pdf>)
