let amigos = [];

function adicionarAmigo() {
    // Captura o valor do input
    let input = document.getElementById("amigo");
    let nome = input.value.trim();
    
    // Validação: verifica se o nome está vazio
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    } else {
        // Adiciona o nome ao array de amigos
        amigos.push(nome);
    }
    
    
    // Limpa o campo de entrada
    input.value = "";

    // Exibe a lista atualizada
    exibirAmigos(); // Chama a função para atualizar a lista de amigos na interface
    
    // Exibe a lista atualizada (opcional)
    console.log("Lista de amigos:", amigos);
}

function exibirAmigos() {
    // Obtém o elemento da lista onde os amigos serão exibidos
    let lista = document.getElementById("listaAmigos");

    // Limpa a lista existente para evitar duplicações
    lista.innerHTML = "";

    // Percorre o array de amigos e adiciona cada nome como um <li>
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li"); // Cria um novo elemento <li>
        li.textContent = amigos[i]; // Define o texto do <li> como o nome do amigo
        lista.appendChild(li); // Adiciona o <li> à lista
    }
}
