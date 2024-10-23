# 📝 Aula 1: Crie o Primeiro E-mail

Nesta aula, aprendemos sobre a estrutura básica de um e-mail HTML e as melhores práticas para design de e-mails. A seguir, está o exemplo de um e-mail HTML que criamos com base em um layout no Figma.

## Estrutura do E-mail HTML

### Arquivo HTML

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <body>
    <center>
      <table width="600" cellpadding="0" cellspacing="0">
        <thead>
          <tr>
            <th style="padding-top: 32px; padding-bottom: 32px;">
              <img src="./img/EBAC_Banking.png" alt="EBAC Banking" />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              style="font-size: 24px; font-weight: bold; padding-top: 8px; padding-bottom: 8px; background-color: #10AC84; color: #FFF; text-align: center; font-family: sans-serif;"
            >
              Você recebeu uma transferência!
            </td>
          </tr>
          <tr>
            <td style="padding-left: 40px; padding-top: 32px; padding-bottom: 32px;">
              <p style="font-size: 20px; font-family: sans-serif; margin: 0;">
                Olá <b>Lucelho Silva</b>. <br />
                Você recebeu um Pix de <b>Aparecida Silva</b>.
              </p>
            </td>
          </tr>
          <tr>
            <td style="background-color: #F8F2F2; padding: 16px 40px; font-family: sans-serif; font-size: 14px;">
              <table width="520" cellpadding="0" cellspacing="0">
                <tbody>
                  <tr>
                    <td align="left">Valor recebido</td>
                    <td align="right">
                      <b>R$ 3.000,00</b>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td align="right" style="padding-top: 8px;">
              <p style="margin: 0; font-family: sans-serif; font-size: 12px;">
                Pix recebido em 05/11/2024 às 15:00<br />
                Para mais detalhes acesse o app
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding-top: 128px;">
              <center>
                <a href="https://instagram.com" style="text-decoration: none;">
                  <img src="./img/instagram.png" alt="instagram" />
                </a>
                <a href="https://facebbok.com" style="text-decoration: none;">
                  <img src="./img/facebook.png" alt="facebook" />
                </a>
                <a href="https://twitter.com" style="text-decoration: none;">
                  <img src="./img/twitter.png" alt="twitter" />
                </a>
              </center>
            </td>
          </tr>
        </tbody>
      </table>
    </center>
  </body>
</html>
```

## Melhores Práticas de Design de E-mails

1. **Compatibilidade com Clientes de E-mail:** Utilize tabelas para estruturação do layout, garantindo que o e-mail seja compatível com a maioria dos clientes de e-mail.
2. **Centralização e Padding:** Centralize o conteúdo e use `padding` para garantir que o texto e os elementos visuais não fiquem colados nas bordas.
3. **Fontes Web-Safe:** Use fontes comuns como Arial, Helvetica ou sans-serif para garantir que o texto seja renderizado corretamente em todos os dispositivos.
4. **Imagens com Texto Alternativo:** Adicione texto alternativo (`alt`) nas imagens para que, caso elas não sejam carregadas, o usuário ainda tenha uma ideia do que deveria aparecer ali.
5. **Links de Redes Sociais:** Inclua ícones e links para redes sociais para aumentar o engajamento e a visibilidade da marca.
6. **Estilização Inline:** Use estilos inline para garantir que o CSS seja aplicado corretamente em todos os clientes de e-mail, já que muitos não suportam estilos externos ou embutidos no `<head>`.

Seguindo essas práticas, podemos criar e-mails que são não apenas visualmente atraentes, mas também funcionais e acessíveis em diversos dispositivos e clientes de e-mail.
