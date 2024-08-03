# 📝 Aula 3: Crie um E-mail de Recuperação de Senha

<div style="text-align: center;">
  <img src="./Exemplo da aula/images/email_recuperacao.jpg" alt="Litmus PutsMail" width="200px">
</div>

## Objetivos

- Compreender o uso de atributos em elementos HTML;
- Aplicar estilos e formatação em elementos HTML;
- Compreender as melhores práticas para construir e-mails.

## Estrutura do E-mail

Nesta aula, aprendemos a criar um e-mail de recuperação de senha. Abaixo está o código completo do e-mail que criamos:

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Recuperação de Senha</title>
  </head>

  <body>
    <center>
      <table width="600" cellspacing="0" cellpadding="0">
        <thead>
          <tr bgcolor="#1C54A8">
            <th align="left" style="padding-top: 24px; padding-bottom: 24px; padding-left: 40px; font-family: sans-serif; color: #FFF; font-size: 20px; font-weight: normal;">
              Recuperação de senha
            </th>
            <th style="padding-top: 24px; padding-bottom: 24px;">
              <img src="./images/EBAC_SHOES.png" alt="EBAC Shoes" />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="2" style="padding: 24px 40px 80px;">
              <h2 style="font-family: sans-serif; font-size: 16px;">
                <b><i>Olá, tudo bem?</i></b>
              </h2>
              <p style="font-family: sans-serif; font-size: 14px; padding-bottom: 24px;">
                Recebemos sua solicitação de recuperação de senha. Para criar uma nova senha, clique no botão abaixo:
              </p>
              <a href="" style="background-color: #1C54A8; font-size: 16px; text-decoration: none; color: #FFF; padding: 8px; border-radius: 6px; font-family: sans-serif;">
                <b><i>Cadastrar nova senha</i></b>
              </a>
              <p style="font-family: sans-serif; font-size: 14px; padding-top: 16px;">
                <i>
                  <span style="color: #616161;"> O link é válido por 24 horas. </span>
                  <br /><br />
                  <b>Importante:</b> Caso não tenha feito a solicitação, desconsidere este e-mail.
                </i>
              </p>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr bgcolor="#1C54A8">
            <td align="center" colspan="2" style="padding-top: 24px; padding-bottom: 24px;">
              <a href="https://ebac.com.br">
                <img src="./images/ebac_shoes_site.png" alt="EBAC Shoes" />
              </a>
            </td>
          </tr>
        </tfoot>
      </table>
    </center>
  </body>
</html>
```

## Melhores Práticas para Construção de E-mails

### Tabela Centralizada

- **Tabela Principal:** Utilize uma tabela centralizada para garantir que o layout seja consistente em diferentes clientes de e-mail.
- **Largura Fixa:** Defina uma largura fixa para a tabela principal (`width="600"`).

### Cabeçalho e Rodapé

- **Cabeçalho:** Inclua uma linha de cabeçalho com o nome da empresa e um logotipo.
- **Rodapé:** Inclua uma linha de rodapé com links para o site ou redes sociais.

### Estilo e Formatação

- **Estilos Inline:** Utilize estilos inline para garantir compatibilidade com a maioria dos clientes de e-mail.
- **Fontes Seguras:** Utilize fontes seguras para web, como Arial, Helvetica, sans-serif.
- **Imagens com Texto Alternativo:** Adicione atributos `alt` às imagens para descrever seu conteúdo.

### Links e Botões

- **Botões:** Crie botões utilizando links (`<a>`) estilizados com fundo colorido e padding.
- **Links com Validade:** Informe ao usuário sobre a validade dos links (e.g., "O link é válido por 24 horas").

Com essas práticas, garantimos que o e-mail de recuperação de senha seja exibido corretamente em diversos dispositivos e clientes de e-mail, proporcionando uma boa experiência ao usuário.
