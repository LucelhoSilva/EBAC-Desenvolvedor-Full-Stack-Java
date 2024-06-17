document.addEventListener('DOMContentLoaded', () => {
    fetch('./assets/Json/produtos.json')
        .then(response => response.json())
        .then(produtos => {
            const listaProdutos = document.getElementById('lista-produtos');

            produtos.forEach(produto => {
                const article = document.createElement('article');
                article.classList.add('tenis');

                const div = document.createElement('div');
                const img = document.createElement('img');
                img.src = produto.imagem;
                img.alt = produto.alt;
                div.appendChild(img);

                const h3 = document.createElement('h3');
                h3.textContent = produto.titulo;

                const p = document.createElement('p');
                p.textContent = produto.descricao;

                const button = document.createElement('button');
                button.type = 'button';
                button.textContent = 'Adicionar ao carrinho';

                article.appendChild(div);
                article.appendChild(h3);
                article.appendChild(p);
                article.appendChild(button);

                listaProdutos.appendChild(article);
            });
        })
        .catch(error => console.error('Erro ao carregar o arquivo JSON:', error));
});
