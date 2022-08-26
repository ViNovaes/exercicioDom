
function trocarImagem(filename,personagemName) {
    document.querySelector('.imagem').setAttribute('src','images/'+filename)
    document.querySelector('.imagem').setAttribute('data-personagem',personagemName)
    
}

function pegarPersonagem(){
    let personagem = document.querySelector('.imagem').getAttribute('data-personagem')
    alert("O personagem é " +personagem)
}

