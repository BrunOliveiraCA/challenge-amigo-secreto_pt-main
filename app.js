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
    
    // Exibe a lista atualizada (opcional)
    console.log("Lista de amigos:", amigos);
}
