document.getElementById('formCadastro').addElementListener('submit', function(event){
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const desc = document.getElementById('desc').value;
    const preco = document.getElementById('preco').value;
    const qntd = document.getElementById('qntd').value;
});

