// maior ou menor de idade 

function idade_maior_menor() {

    var idade = window.document.querySelector('#input_idade');
    var res = window.document.getElementById('res');
    idade = Number(input_idade.value);

    res.innerHTML = `A sua idade é ${idade}`

    if (idade >= 18) {
        res.innerHTML += `<br> Você é MAIOR de idade.`
    } else {
        res.innerHTML += `<br> Você é MENOR de idade.`
    }
}