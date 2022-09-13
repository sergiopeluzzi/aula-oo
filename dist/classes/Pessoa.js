"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
var Pessoa = /** @class */ (function () {
    function Pessoa(nome) {
        this.nome = nome;
        this.ativo = true;
    }
    Pessoa.prototype.fazerSaudacao = function () {
        console.log("Meu nome é: " + this.nome);
    };
    Pessoa.prototype.desligarPessoa = function () {
        this.ativo = false;
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
