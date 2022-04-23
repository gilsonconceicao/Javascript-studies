// Prática do doc /heranca#4

(function() {
    function CreateUser() {}
    CreateUser.prototype.nome = 'nome do usuário';

    CreateUser.prototype.AddUser = function(numberCadastro) {
        console.log(`${numberCadastro}. Nome do usuário cadastrado: ${this.nome}`); 
    }   

     const user1 = new CreateUser
     user1.nome = 'Junior'; 
     user1.AddUser(1)

     const user2 = new CreateUser; 
     user2.nome = 'Jorge'; 
     user2.AddUser(2)

})(); 