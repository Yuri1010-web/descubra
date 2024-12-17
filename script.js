function descobrirJogador() {
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const time = document.getElementById('time').value;
    const posicao = document.getElementById('posicao').value;
    
    if (nome && idade && time && posicao) {
        document.getElementById('resultado').innerText = `Parabéns, ${nome}! Com ${idade} anos, jogando no ${time} como ${posicao}, você é o craque do time!`;
    } else {
        alert('Preencha todos os campos!');
    }
}
