var Cliente = (function () {
    function Cliente(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Cliente.prototype.apresentar = function () {
        return 'Olá, eu sou ' + this.nome + ' e tenho ' + this.idade + ' anos!';
    };
    return Cliente;
}());
var joao = new Cliente('João', 25);
var apresentacao = joao.apresentar();
console.log(apresentacao);
var maria = new Cliente('Maria', 23);
console.log(maria.apresentar());
