// boolean
var estaPago = true;
//number
var idade = 20;
var valor = 29.99;
//string
var empresa = 'AlgaWorks';
//Template Strings
var nome = 'João';
console.log('Oljá, meu nome é ' + nome + ' e tenho ' + idade + ' anos');
// outra forma de concatenação é utilizando ${variavel}, ao invés de utilizar o (+ variavel +)
//arrays
var notas = [8, 6, 7, 9];
//tuple 
var alunos = ['João', 10, 'Matemática'];
console.log(alunos[0]);
console.log(alunos[1]);
//Enum
var Cor;
(function (Cor) {
    Cor[Cor["Verde"] = 0] = "Verde";
    Cor[Cor["Amarelo"] = 1] = "Amarelo";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Branco"] = 3] = "Branco";
})(Cor || (Cor = {}));
;
var corFundo = Cor.Verde;
// any
var algumValor = 4;
algumValor = 'Agora é uma string';
algumValor = true;
//biblioteca de terceiors...
//migração de JavaScript para TypeScript
//Outro exemplo: array com varios tipos de dados 
//void 
function alerta() {
    //... alert('Operação não permitida');    
}
//null e undefined -> Não faz muito sentido!
var u = undefined;
var n = null;
// nul e undefined são subtipos dos outros tipos  
