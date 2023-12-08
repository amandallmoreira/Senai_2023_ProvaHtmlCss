// CADASTRO DE USUARIO
document.getElementById("btnEnviar").addEventListener("click",cadastroUser);
var cadastro =[];

    
function cadastroUser(){
    let nome = document.querySelector('#nome').value;
    let sobrenome = document.querySelector('#sobrenome').value;
    let email = document.querySelector('#email').value;
    let senha = document.querySelector('#senha').value;
    let senhanov = document.querySelector('#senhanov').value;
    let telefone = document.querySelector('#telefone').value;
    let endereco = document.querySelector('#endereco').value;
    let CEP = document.querySelector('#CEP').value;
    let estado = document.querySelector('#estado').value;
    let genero = document.querySelector('#genero').value;
    let date = document.querySelector('#date').value;


    cadastro.push(nome,sobrenome,email,senha,senhanov,telefone,endereco,CEP,estado,genero,date);

    alert("Cadastro efetuado com sucesso"+cadastro[0])

}