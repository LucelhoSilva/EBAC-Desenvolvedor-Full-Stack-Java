## 📝 Aula 5: Crie um E-mail de Promoções

### Objetivos:

1. Criar um e-mail de promoções personalizado.
2. Testar e otimizar e-mails para compatibilidade.
3. Compreender a importância da acessibilidade em e-mails.

### Descrição da Aula:

Nesta aula, aprendemos a criar um e-mail de promoções que se destaca por sua personalização, otimização para compatibilidade com diferentes dispositivos e consideração pela acessibilidade.

```html
<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Promoções da Semana</title>
</head>

<body>
    <center>
        <table width="600" cellspacing="0" cellpadding="0">
            <thead>
                <tr bgcolor="#1C54A8">
                    <th align="left"
                        style="padding-top: 24px; padding-bottom: 24px; padding-left: 40px; font-family: sans-serif; color: #FFF; font-size: 20px; font-weight: normal;">
                        Promoções da semana
                    </th>
                    <th>
                        <img src="./images/EBAC_SHOES.png" alt="EBAC_SHOES"
                            style="padding-top: 24px; padding-bottom: 24px;">
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colspan="2" style="padding: 24px 40px 80px;">
                        <h2 style="font-family: sans-serif; font-size: 16px;">
                            <b>
                                <i>Temos promoções exclusivas para você</i>
                            </b>
                        </h2>
                        <p style="font-family: sans-serif; font-size: 14px; padding-bottom: 24px;">
                            Separamos algumas promoções exclusivas para você, nosso cliente.<br>
                            Para ficar melhor ainda, utilize o cupom abaixo para <b>ganhar 10% OFF e frete grátis!</b>
                        </p>
                        <center>
                            <span
                                style="display: inline-block; font-size: 24px; color: #1C54A8; border: solid 3px #1C54A8; font-family: sans-serif; padding: 8px 16px; border-radius: 8px;">
                                <b>EBAC_S_24</b>
                            </span>
                            <span
                                style="font-size: 12px; color: #777777; font-family: sans-serif; display: block; padding-top: 8px;">
                                Válido até 10/10/2024
                            </span>
                        </center>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" style="padding-left: 40px; padding-right: 40px;">
                        <div style="padding-bottom: 24px; display: inline-block; width: 100%; max-width: 127px;">
                            <a href="#" style="text-decoration: none; color: #000;">
                                <img src="./images/shoes.png" alt="tenis nike">
                                <div style="font-family: sans-serif; font-size: 12px;">
                                    <h3 style="margin: 0;"><b>Tênis Nike</b></h3>
                                    <span style="color: #C1C1C1; text-decoration: line-through;">
                                        de R$ 350,00
                                    </span>
                                    <p style="margin: 0;">
                                        por R$ 200,00 <br>
                                        ou 4x R$ 50,00
                                    </p>
                                </div>
                            </a>
                        </div>
                        <!-- Adicione mais produtos conforme necessário -->
                    </td>
                </tr>
            <tfoot>
                <tr bgcolor="#1C54A8">
                    <td align="center" colspan="2" style="padding-top: 24px; padding-bottom: 24px;">
                        <a href="https://ebac.com.br">
                            <img src="./images/ebac_shoes_site.png" alt=" ebacShoes.com.br">
                        </a>
                    </td>
                </tr>
            </tfoot>
            </tbody>
        </table>
    </center>
</body>

</html>
```
