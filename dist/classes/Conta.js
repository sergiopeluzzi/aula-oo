"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
var Conta = /** @class */ (function () {
    function Conta(agencia, numero) {
        this.agencia = agencia;
        this.numero = numero;
        this.saldo = 0;
        this.limite = 0;
    }
    Conta.prototype.mostrarSaldo = function () {
        console.log("Saldo atual: " + this.saldo);
    };
    Conta.prototype.mostrarSaldoComLimite = function () {
        var saldoTotal = this.limite + this.saldo;
        console.log("Saldo atual com limite: " + saldoTotal.toFixed(2));
    };
    Conta.prototype.depositar = function (valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log("Depósito de R$" + valor.toFixed(2) + " efetuado com sucesso!");
        }
        else {
            console.log("Valor informado inválido");
        }
    };
    Conta.prototype.sacar = function (valor) {
        var saldoTotal = this.limite + this.saldo;
        if (valor <= saldoTotal) {
            this.saldo -= valor;
            console.log("Saque de R$" + valor.toFixed(2) + " efetuado com sucesso!");
        }
        else {
            console.log("Valor informado inválido");
        }
    };
    Conta.prototype.adicionarLimite = function (valor) {
        if (valor > 0) {
            this.limite += valor;
            console.log("Limite de R$" + valor.toFixed(2) + " adicionado com sucesso!");
        }
        else {
            console.log("Valor informado inválido");
        }
    };
    Conta.prototype.pix = function (valor, conta) {
        this.sacar(valor);
        conta.depositar(valor);
    };
    return Conta;
}());
exports.Conta = Conta;
