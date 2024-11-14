// Função sem retorno, (procedure rs delphi)
function inicio() {
    const mensagem = 'Estou iniciando...'
    console.log(mensagem);
}

//Função com retorno (function)
function processa() {
    const mensagem = 'Estou processando...';
    return mensagem;
}

function run() {
    inicio();
    console.log(processa());
}

// assincronia = execução em paralelo. js é assincrono.
// sincronia = execução de uma de cada vez.

run();