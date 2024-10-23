$(document).ready(function() {
      $('#tel').mask('(00) 00000-0000', {
        placeholder: '(xx) xxxxx-xxxx',
      });

      $('#cadastroForm').validate({
        rules: {
          nome: {
            required: true
          },
          email: {
            required: true,
            email: true
          },
          tel: {
            required: true
          },
          "aceito-termos": {
            required: true
          }
        },
        messages: {
          nome: 'Por favor, insira o seu nome',
          tel: 'Por favor, insira seu telefone',
          email: 'Por favor, insira seu email',
          "aceito-termos": 'Você deve aceitar os termos'
        },
        errorPlacement: function(error, element) {
          if (element.attr("name") == "aceito-termos") {
            error.insertAfter(element.next("label"));
          } else {
            error.insertAfter(element);
          }
        },
        submitHandler: function(form) {
          console.log(form);
          $('#nome').val('');
          $('#email').val('');
          $('#tel').val('');
          $('#aceito-termos').prop('checked', false);
        }
      });
    });