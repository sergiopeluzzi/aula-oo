var Pessoa = /** @class */ (function () {
    function Pessoa(nome, dtNasc, cpf) {
        this.nome = nome;
        this.dataDeNascimento = dtNasc;
        this.cpf = cpf;
    }
    Pessoa.prototype.fazerSaudacao = function () {
        console.log("Meu nome é: " + this.nome);
    };
    return Pessoa;
}());
var p1 = new Pessoa("Sergio", "1985-11-25", "000.000.000-00");
var p2 = new Pessoa("Joana", "1995-10-05", "111.111.111-11");
var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(agencia, numero, tipo) {
        this.saldo = 0;
        this.limite = 0;
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
    }
    ContaBancaria.prototype.mostrarSaldo = function () {
        console.log("Saldo atual: " + this.saldo);
    };
    ContaBancaria.prototype.mostrarSaldoComLimite = function () {
        var saldoTotal = this.limite + this.saldo;
        console.log("Saldo atual com limite: " + saldoTotal.toFixed(2));
    };
    ContaBancaria.prototype.depositar = function (valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log("Depósito de R$" + valor.toFixed(2) + " efetuado com sucesso!");
        }
        else {
            console.log("Valor informado inválido");
        }
    };
    ContaBancaria.prototype.sacar = function (valor) {
        var saldoTotal = this.limite + this.saldo;
        if (valor <= saldoTotal) {
            this.saldo -= valor;
            console.log("Saque de R$" + valor.toFixed(2) + " efetuado com sucesso!");
        }
        else {
            console.log("Valor informado inválido");
        }
    };
    ContaBancaria.prototype.adicionarLimite = function (valor) {
        if (valor > 0) {
            this.limite += valor;
            console.log("Limite de R$" + valor.toFixed(2) + " adicionado com sucesso!");
        }
        else {
            console.log("Valor informado inválido");
        }
    };
    return ContaBancaria;
}());
var cb1 = new ContaBancaria(111, 111, "Corrente");
var cb2 = new ContaBancaria(111, 222, "Poupança");
console.log("cb1");
cb1.mostrarSaldoComLimite();
cb1.depositar(500);
cb1.mostrarSaldoComLimite();
cb1.sacar(100);
cb1.mostrarSaldoComLimite();
cb1.adicionarLimite(1000);
cb1.mostrarSaldo();
cb1.mostrarSaldoComLimite();
console.log("================");
console.log("cb2");
cb2.mostrarSaldoComLimite();
