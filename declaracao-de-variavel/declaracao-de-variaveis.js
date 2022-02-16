// var, let e const
// var 
/*
function iniciarTime(iniciaJogo) {
    var nome = 'Messi e amigos';

    if (iniciaJogo) {
        var cidade = 'em Uberlândia';

    }

    console.log(nome + ' vão jogar ' + cidade);
}

iniciarTime(true);
*/
// let
/*
function iniciarTime(iniciaJogoemUberlandia) {
    let nome = 'Messi e amigos';
    let cidade = 'em São Paulo';

    if (iniciaJogoemUberlandia) {
        let cidade = 'em Uberlândia';

    }

    console.log(nome + ' vão jogar ' + cidade);
}

iniciarTime(true);
*/
//const 
function iniciarTime(iniciaJogoemUberlandia) {
    var nome = 'Messi e amigos';
    var cidade = 'em São Paulo';
    if (iniciaJogoemUberlandia) {
        cidade = 'em Uberlândia';
    }
    //nome= 'Ronaldo e amigos';
    console.log(nome + ' vão jogar ' + cidade);
}
iniciarTime(true);
