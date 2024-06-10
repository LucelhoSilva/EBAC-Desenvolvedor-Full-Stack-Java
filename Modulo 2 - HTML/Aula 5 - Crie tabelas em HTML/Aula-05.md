## 📝 Aula 05: Tabelas

### ✅ Tabelas

Para construir uma tabela utilizamos as tags:

`<table>`: é o container da tabela;

`<thead>`: utilizada para construir o cabeçalho da tabela;

`<tbody>`: utilizada para construir o corpo, conteúdo, da tabela;

`<tfoot>`: utilizada para construir o rodapé da tabela.

`<tr>`: utilizada para construir uma linha na tabela;

`<td>`: utilizada para construir uma coluna na tabela;

`th>`: utilizada para construir uma coluna no cabeçalho da tabela;

`<caption>`: utilizada para inserir uma legenda para a tabela;

<br>

### ✅ Tabelas - Exemplo

```
<table>
    <caption>Smarphones mais vendidos no ano</caption>
    <thead>
        <th>Smartphone</th>
        <th>Marca</th>
        <th>Vendas</th>
    </thead>
    <tbody>
        <tr>
            <td>Galaxy S21</td>
            <td>Samsung</td>
            <td>1.005.000</td>
        </tr>
        <tr>
            <td>iPhone 13</td>
            <td>Apple</td>
            <td>970.000</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td colspan=“2”>Total de vendas</td>
            <td>1.975.000</td>
        </tr>
    </tfoot>
</table>
```

Aqui na tag `<td>` utilizamos o atributo colspan para fazer com que a coluna ocupasse o espaço de duas colunas para que o layout da tabela não fosse desalinhado.

<br>

[Material](<./Crie tabelas em HTML.pdf>)
