function verifyEnablement(){
    let selectValue = document.querySelector('select').value
    if (selectValue == 'disable'){
        document.querySelector("input[name='some-text']").disabled = true
        let pElement = document.querySelector("#message")
        pElement.innerText = "Desabilitado!"
        pElement.style.backgroundColor = 'red'
        pElement.style.color = 'white'
    } else {
        document.querySelector("input[name='some-text']").disabled = false
        let pElement = document.querySelector("#message")
        pElement.innerText = "Habilitado"
        pElement.style.backgroundColor = 'blue'
        pElement.style.color = 'white'
    }
}

