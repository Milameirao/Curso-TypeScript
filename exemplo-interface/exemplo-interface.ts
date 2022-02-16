interface Pessoa {
    idade: number;
    sexo?: string; // A ? mostra que não é obrigatório o sexo
}

function imprimirIdade(pessoa: Pessoa) {
    console.log(pessoa.idade);
}

let joaoMarcos = {nome: 'João Marcos', idade: 22}

imprimirIdade(joaoMarcos);