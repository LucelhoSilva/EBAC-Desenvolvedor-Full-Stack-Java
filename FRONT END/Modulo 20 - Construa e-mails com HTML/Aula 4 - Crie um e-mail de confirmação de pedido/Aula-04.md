# 📝 Aula 4: Crie um E-mail de Confirmação de Pedido

## Objetivos

- Dominar a estrutura e formatação de e-mails HTML;
- Aplicar técnicas avançadas de formatação;
- Entender as melhores práticas de design de e-mails.

## Estrutura do E-mail

Nesta aula, aprendemos a criar um e-mail de confirmação de pedido. Abaixo está o código completo do e-mail que criamos:

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Confirmação de Pedido</title>
  </head>

  <body>
    <center>
      <table width="600" cellspacing="0" cellpadding="0">
        <thead>
          <tr bgcolor="#1C54A8">
            <th align="left" style="padding-top: 24px; padding-bottom: 24px; padding-left: 40px; font-family: sans-serif; color: #FFF; font-size: 20px; font-weight: normal;">
              Recebemos seu pedido
            </th>
            <th>
              <img src="./images/EBAC_SHOES.png" alt="EBAC Shoes" style="padding-top: 24px; padding-bottom: 24px;" />
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
                Recebemos o seu pedido e agora estamos aguardando a confirmação do pagamento pela operadora.
              </p>
              <p style="font-family: sans-serif; font-size: 14px; padding-bottom: 24px;">Você pode acompanhar os detalhes do pedido clicando no botão abaixo:</p>
              <a href="" style="background-color: #1C54A8; font-size: 16px; text-decoration: none; color: #FFF; padding: 8px; border-radius: 6px; font-family: sans-serif;">
                <b><i>Acompanhar pedido</i></b>
              </a>
            </td>
          </tr>
          <tr>
            <td colspan="2" style="font-family: sans-serif; font-size: 16px; padding-left: 40px;">
              <b><i>Detalhes do pedido</i></b>
            </td>
          </tr>
          <tr>
            <td colspan="2" style="padding-left: 40px; padding-top: 16px; padding-bottom: 80px;">
              <div style="display: inline-block;">
                <img src="./images/shoes.png" alt="Produto comprado" />
              </div>
              <div style="display: inline-block; padding-left: 16px;">
                <p style="font-family: sans-serif; font-size: 14px; margin: 0;">
                  <b>Tênis Nike</b> <br />
                  <b>Tamanho:</b> 40 <br />
                  <b>Cor:</b> Preta <br />
                  <b>Quantidade:</b> 1 <br />
                  <b>Preço:</b> R$ 350,00 em 5x R$ 70,00 <br />
                  <b>Frete:</b> grátis <br />
                  <b>Número do Pedido:</b> 9876523453 <br />
                </p>
              </div>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr bgcolor="#1C54A8">
            <td align="center" colspan="2" style="padding-top: 24px; padding-bottom: 24px;">
              <a href="https://ebac.com.br">
                <img src="./images/ebac_shoes_site.png" alt="ebacShoes.com.br" />
              </a>
            </td>
          </tr>
        </tfoot>
      </table>
    </center>
  </body>
</html>
```
