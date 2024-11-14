const exibeMensagem = () => {
    var msgForaIf = 'Brazil';

    if (true) {
        var msgDentroIF = 'Argentina';

        console.log(msgDentroIF);
    }

    console.log('1', msgForaIf);
    console.log('2', msgDentroIF);
}

exibeMensagem();

const exibeMensagemLet = () => {
    let msgForaIf = 'Brazil';

    if (true) {
        let msgDentroIF = 'Argentina';

        console.log(msgDentroIF);
    }

    console.log('1', msgForaIf);
    console.log('2', msgDentroIF);
}

exibeMensagemLet();