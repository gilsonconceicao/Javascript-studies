// contexto léxico 
// É o contexto como um todo que determina o que está sendo feito: function, object, array , variável...

const valor = 'Global'; 

function minhaFuncao() {
    //const valor = 'Local'; 
    console.log(valor); 
}

function exec() {
    const valor = 'Local'; 
    minhaFuncao(); 
}

exec()