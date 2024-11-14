const inicio = () => {
    console.log('Estou iniciando...');
}

const fim = () => {
    console.log('Estou finalizando...');
}

const processa = (funcao1, funcao2) => {
    funcao1();
    console.log('Estou processando...');
    funcao2();
}


processa(inicio, fim);

processa(() => {
    console.log('Função 1');
}, () => {
    console.log('Função 2')
});