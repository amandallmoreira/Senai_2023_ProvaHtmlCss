
// JAVASCRIPT

// menu HAMBURGUER
function abrirOpcoes() {
    if (opcoesMobile.style.display == 'none') {
        opcoesMobile.style.display = 'flex'
        //Se o menu mobile estiver escondido então mostrar o Icone;/ = atribuição, ==comparação
    } else {
        opcoesMobile.style.display = 'none'
        //Caso contrário não mostre o Icone.
    }
}

// VALIDAÇÃO DE LOGIN
document.getElementById("botaoLogin").addEventListener("click", validarUser);

function validarUser() {
    var nomeUser = document.getElementById('nomeUser')
    var senhaUser = document.getElementById('senhaUser')

    if (nomeUser.value.length == 0 && senhaUser.value.length == 0) {
        alert(`[ERRO] Verifique os dados e tente novamente.`)
        // Se o nomeUser e a senhaUser estiverem vazios, aparecerá mensagem de ERRO
    }
    else {
        alert('Parabéns, login realizado com sucesso.')
        document.write(`USUÁRIO: ${nomeUser.value} <br> SENHA: ${senhaUser.value}`)
        //Qualquer valor no campo usuario e senha será validado
    }
}












