// 1- usando a anotação literal 
const obj01 = {
    nome: 'Junior' 
}
console.log(obj01)

// 2- Express object em JS 
console.log(typeof new Object, typeof Object); 

// 3- funções construtoras - aplicando com parâmetro
function CreateProduct(nome, preco, desc) {
    this.nome = nome; 
    this.precoComDesconto = () => {
        return `O produto ${this.nome} está na promoção de ${preco * (1 - desc)}`
    }
}
const produto01 = new CreateProduct(); 
console.log(produto01.precoComDesconto)

// 4 - função factory 

function CreateUser(firstName, lastName, anoNasc) {
    return {
        firstName, 
        lastName, 
        FalarCompleto () {
            return `Olá, ${firstName+' '+lastName} a sua idade é ${new Date().getFullYear() - anoNasc}!`
        }
    } 
}

const user = CreateUser('Junior', 'Santos', 2005); 
console.log(user.FalarCompleto())