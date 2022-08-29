const paragrafo = document.createElement('p')

paragrafo.innerText = "Isso é um paragrafo FODA!"

document.body.appendChild(paragrafo)

// outra

function alteracao(){
    document.getElementById("minhadiv").classList.add("classe1","classe2","classe3")
}

function reverse(){
    document.getElementById("minhadiv").classList.remove("classe1","classe2","classe3")
}