function verificar(nome,quem){
    nome = document.getElementById('nome').value
    quem = document.getElementById('quem').value
    resposta = document.getElementById('resposta')
    
    if (nome === 'Bryan' && quem === 'Karla') {
        resposta.innerText = 'Pode Entrar'
    } else {
    resposta.innerText = 'Mete o pé'
    }
}