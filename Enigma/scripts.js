// Função para mostrar um alerta
function showAlert() {
    alert('Agora só resta você prosseguir e encontrar seu caminho em meio as pistas ok?');
   alert(' Em nosso cabeçalho estarão os caminhos que poderá usar, valeu e falou!')
    console.log('Botão de alerta clicado');
}

// Função para mostrar o conteúdo da tab
function openTab(tabName) {
    // Oculta todos os elementos com a classe 'tabcontent'
    let tabs = document.getElementsByClassName('tabcontent');
    for (let tab of tabs) {
        tab.style.display = 'none';
    }

    // Remove a classe 'active' de todos os elementos com a classe 'tablink'
    let tablinks = document.getElementsByClassName('tablink');
    for (let tablink of tablinks) {
        tablink.classList.remove('active');
    }

    // Mostra o conteúdo da tab selecionada
    document.getElementById(tabName).style.display = 'block';

    // Adiciona a classe 'active' ao link da tab selecionada
    event.currentTarget.classList.add('active');
}

// Função para adicionar comentário
function addComment(postId) {
    // Obtém o texto do comentário digitado
    let commentText = document.getElementById('comment-' + postId).value;

    // Cria um novo item de lista para o comentário
    let newComment = document.createElement('li');
    newComment.textContent = commentText;

    // Adiciona o novo comentário à lista de comentários correspondente
    let commentsList = document.getElementById('comments-' + postId);
    commentsList.appendChild(newComment);

    // Limpa o textarea após adicionar o comentário
    document.getElementById('comment-' + postId).value = '';

    // Poderia salvar os comentários em um banco de dados ou outro armazenamento permanente aqui
}
