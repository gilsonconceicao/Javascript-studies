// callback 02 JS - filter 

let produtos = [
    {id: 1, descricao: "Smartphone", categoria: "Eletrônico"},
    {id: 2, descricao: "Notebook", categoria: "Eletrônico"},
    {id: 3, descricao: "Geladeira", categoria: "Eletrodoméstico"},
    {id: 4, descricao: "Liquidificador", categoria: "Eletrodoméstico"},
    {id: 5, descricao: "Fogão", categoria: "Eletrodoméstico"} 
]; 

// apenas aletrônico 
const productEletronico = produtos.filter(eletrico => eletrico.id %2 == 1); 
console.log(productEletronico);