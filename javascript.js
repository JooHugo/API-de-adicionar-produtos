document.getElementById('form-cadastrar').addEventListener('submit', function(event) {
    event.preventDefault(); // impede o envio do formulário

    const nome = document.getElementById('nome').value;
    const desc = document.getElementById('desc').value;
    const preco = document.getElementById('preco').value;
    const qntd = document.getElementById('quantidade').value;

    console.log("Nome:", nome);
    console.log("Desconto:", desc);
    console.log("Preço:", preco);
    console.log("Quantidade:", qntd);

    const produto = {
        nome: nome,
        desc: desc,
        preco: preco,
        qntd: qntd
    };
});
