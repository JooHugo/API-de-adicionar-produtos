// Classe Produto com cálculo de preço com desconto
class Produto {
    constructor(nome, quantidade, preco, desconto) {
        this.nome = nome;
        this.quantidade = parseFloat(quantidade);
        this.preco = parseFloat(preco);
        this.desconto = parseFloat(desconto);
    }

    calcularPrecoFinal() {
        return this.preco - (this.preco * this.desconto / 100);
    }
}

// Lista para armazenar os produtos
const listaProdutos = [];

// Evento do formulário
document.getElementById('form-cadastrar').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const quantidade = document.getElementById('quantidade').value;
    const preco = document.getElementById('preco').value;
    const desconto = document.getElementById('desc').value;

    if (desconto === "escolher") {
        alert("Por favor, escolha um desconto válido.");
        return;
    }

    const produto = new Produto(nome, quantidade, preco, desconto);
    listaProdutos.push(produto);

    atualizarTabela();
    this.reset();
});

// Atualiza a tabela HTML com os produtos cadastrados
function atualizarTabela() {
    const lista = document.getElementById('listaItens');
    lista.innerHTML = '';

    listaProdutos.forEach(prod => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${prod.nome}</td>
            <td>${prod.quantity}</td>
            <td>R$ ${prod.preco.toFixed(2)}</td>
            <td>${prod.desconto}%</td>
            <td>R$ ${prod.calcularPrecoFinal().toFixed(2)}</td>
        `;
        lista.appendChild(tr);
    });
}
