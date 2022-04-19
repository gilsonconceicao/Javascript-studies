// compra de carro 

let carModel = 'Jaguar' 
let modelMsg = ''

switch (carModel) {
    case 'Jaguar':
        modelMsg = 'Compra efetuada com sucesso!'; 
        break;
    case 'sedans':
        modelMsg ='Tem certeza que prefere esse modelo?'
        break
    case 'motocicletas':
        modelMsg ='Tem certeza que prefere esse modelo?'
        break
    case 'caminhonetes':
        modelMsg ='Tem certeza que prefere esse modelo?'
        break
    default: 'Não trabalhamos com esse tipo de automovel aqui. '
        break;
}

console.log(modelMsg); 
