$(document).ready(function() {
    $('.botao-menu button').click(function() {
        $('.menu').slideToggle();
    });
});

$(document).ready(function() {
      // Carrega os dados do arquivo JSON
      $.getJSON("./assets/data/conteudo.json", function(data) {
        // Atualiza o conteúdo do destaque
        $("#destaque").html(`
          <h2>Em Destaque</h2>
          <article class="noticia">
            <a href="${data.destaque.link}">
              <img src="${data.destaque.imagem}" alt="">
              <h3>${data.destaque.titulo}</h3>
            </a>
          </article>
        `);

        // Atualiza o conteúdo das últimas notícias
        data.noticias.forEach(function(noticia) {
          $("#noticias").append(`
            <article class="noticia">
              <a href="${noticia.link}">
                <img src="${noticia.imagem}" alt="">
                <h3>${noticia.titulo}</h3>
              </a>
            </article>
          `);
        });

        // Atualiza o conteúdo das novidades
        data.novidades.forEach(function(novidade) {
          $("#novidades").append(`
            <article class="noticia">
              <a href="${novidade.link}">
                <img src="${novidade.imagem}" alt="">
                <h3>${novidade.titulo}</h3>
              </a>
            </article>
          `);
        });
      });
    });