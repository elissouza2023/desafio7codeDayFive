// Definição das variáveis
let frutas = [];
let laticínios = [];
let congelados = [];
let cereais = [];
let carnes = [];
let legumes = [];

// Pergunta se deseja adicionar produtos
let desejaAdicionar = confirm('Gostaria de adicionar produtos à sua lista de compras?');

// Loop para continuar adicionando produtos enquanto o usuário quiser
while (desejaAdicionar) {
    let produtoAdicionar = prompt('Digite o nome do produto que deseja adicionar à sua lista de compras:');

    let categoria = prompt("Digite a categoria do produto: frutas, laticínios, congelados, cereais, legumes ou carnes").toLowerCase();

    // Adiciona o produto na lista correta
    if (categoria === "frutas") {
        frutas.push(produtoAdicionar);
        } else if (categoria === "laticínios") {
        laticínios.push(produtoAdicionar);
        } else if (categoria === "congelados") {
        congelados.push(produtoAdicionar);
        } else if (categoria === "cereais") {
        cereais.push(produtoAdicionar);
        } else if (categoria === "carnes") {
        carnes.push(produtoAdicionar);
        } else if (categoria === "legumes") {
        legumes.push(produtoAdicionar);
             } else {
        alert("Categoria inválida! O produto não foi adicionado.");
    }

    // Pergunta se deseja continuar adicionando produtos
    desejaAdicionar = confirm("Deseja adicionar mais produtos?");
}

// Para atualizar o conteúdo do h2 no HTML
document.getElementById("mensagem").innerHTML = `
    <strong>Lista de Compras Final:</strong><br>
    <strong>Frutas:</strong> ${frutas.join(", ")}<br>
    <strong>Laticínios:</strong> ${laticínios.join(", ")}<br>
    <strong>Congelados:</strong> ${congelados.join(", ")}<br>
    <strong>Cereais:</strong> ${cereais.join(", ")}<br>
    <strong>Carnes:</strong> ${carnes.join(", ")}<br>
    <strong>Legumes:</strong> ${legumes.join(", ")}
`;