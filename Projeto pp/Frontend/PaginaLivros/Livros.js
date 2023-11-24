 
document.addEventListener('DOMContentLoaded', (event) => {
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
 
function adicionarAosFavoritos(livro) {
    let favoritos = localStorage.getItem('favoritos');
    if (!favoritos) {
        favoritos = [];
    } else {
        favoritos = JSON.parse(favoritos);
    }
 
    favoritos.push(livro);
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
}

