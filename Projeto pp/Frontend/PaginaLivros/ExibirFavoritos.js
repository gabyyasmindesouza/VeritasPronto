function exibirFavoritos() {
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    const divFavoritos = document.getElementById('listaDeFavoritos');
    divFavoritos.innerHTML = '';

    favoritos.forEach(livro => {
        const divLivro = document.createElement('div');
        divLivro.classList.add('livro');
        divLivro.innerHTML = `
        <h3 class="tituloLivro">${livro.titulo}</h3>
        <p class="autor">Autor: ${livro.autor}</p>
        ${livro.resenha ? `<p>Resenha: ${livro.resenha}</p>` : ''}
        ${livro.comentario ? `<p class="textoResenhaLivro">Resenha: ${livro.comentario}</p>` : ''}
        <button class="comentarBotao" onclick="abrirComentario('${livro.titulo}')">Escrever Resenha</button>
        <div class="comentarioResenha" id="${livro.titulo}_comentario" style="display:none;">
            <textarea class="inputResenha" id="${livro.titulo}_inputComentario" placeholder="Digite seu comentário"></textarea>
            <button class="adicionarResenhaBotao" onclick="adicionarComentario('${livro.titulo}')">Adicionar Resenha</button>
            <button class="removerBotao" onclick="removerLivro('${livro.titulo}')">Remover Livro</button>
        </div>
        
        `;
        divFavoritos.appendChild(divLivro);
    });
}

function removerLivro(tituloLivro) {
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    
    // Filtra os livros, removendo o livro com o título fornecido
    favoritos = favoritos.filter(livro => livro.titulo !== tituloLivro);

    // Atualiza o localStorage com a nova lista de favoritos
    localStorage.setItem('favoritos', JSON.stringify(favoritos));

    // Atualiza a exibição dos favoritos
    exibirFavoritos();
}


function abrirComentario(tituloLivro) {
    const divComentario = document.getElementById(`${tituloLivro}_comentario`);
    divComentario.style.display = 'block';
}

function adicionarComentario(tituloLivro) {
    const inputComentario = document.getElementById(`${tituloLivro}_inputComentario`);
    const comentario = inputComentario.value;

    // Salvar o comentário no localStorage ou enviar para um servidor, conforme necessário
    // Exemplo de como salvar no localStorage:
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    let livroAtual = favoritos.find(livro => livro.titulo === tituloLivro);

    if (livroAtual) {
        livroAtual.comentario = comentario;
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
    }

    // Atualizar a exibição dos favoritos
    exibirFavoritos();

    // Limpar o valor do input
    inputComentario.value = '';
}


document.addEventListener('DOMContentLoaded', (event) => {
    exibirFavoritos();

    const botaoMarcarComoLido = document.getElementById('marcarComoLido');
    botaoMarcarComoLido.addEventListener('click', function(e) {
        e.preventDefault();
        const livro = {
            titulo: document.getElementById('TituloLivro').innerText,
            autor: document.getElementById('NomeAutor').innerText
            // Adicione outros detalhes do livro conforme necessário
        };
        adicionarAosFavoritos(livro);
    });
});