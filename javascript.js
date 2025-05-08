class Produto {
    constructor(nome, quantidade, preco, desconto) {
      this.nome = nome;
      this.quantidade = parseFloat(quantidade);
      this.preco = parseFloat(preco);
      this.desconto = parseFloat(desconto);
    }
  
    precoFinal() {
      return this.preco - (this.preco * this.desconto / 100);
    }
  }
  
  const produtos = [];
  let editIndex = -1;
  
  document.getElementById("form-cadastrar").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const nome = document.getElementById("nome").value;
    const quantidade = document.getElementById("quantidade").value;
    const preco = document.getElementById("preco").value;
    const desconto = document.getElementById("desc").value;
  
    if (desconto === "escolher") {
      alert("Escolha um desconto válido!");
      return;
    }
  
    const produto = new Produto(nome, quantidade, preco, desconto);
  
    if (editIndex === -1) {
      produtos.push(produto); // novo
    } else {
      produtos[editIndex] = produto; // editando
      editIndex = -1;
    }
  
    atualizarTabela();
    this.reset();
  });
  
  function atualizarTabela() {
    const corpo = document.getElementById("listaItens");
    corpo.innerHTML = "";
  
    produtos.forEach((prod, index) => {
      const linha = document.createElement("tr");
      linha.innerHTML = `
        <td>${prod.nome}</td>
        <td>${prod.quantidade}</td>
        <td>R$ ${prod.preco.toFixed(2)}</td>
        <td>${prod.desconto}%</td>
        <td>R$ ${prod.precoFinal().toFixed(2)}</td>
        <td>
          <button class="btn btn-warning btn-sm" onclick="editarProduto(${index})">Editar</button>
          <button class="btn btn-danger btn-sm" onclick="removerProduto(${index})">Remover</button>
        </td>
      `;
      corpo.appendChild(linha);
    });
  }
  
  window.editarProduto = function(index) {
    const prod = produtos[index];
  
    document.getElementById("nome").value = prod.nome;
    document.getElementById("quantidade").value = prod.quantidade;
    document.getElementById("preco").value = prod.preco;
    document.getElementById("desc").value = prod.desconto;
    editIndex = index;
  };
  
  window.removerProduto = function(index) {
    if (confirm("Tem certeza que deseja remover este produto?")) {
      produtos.splice(index, 1);
      atualizarTabela();
    }
  };    