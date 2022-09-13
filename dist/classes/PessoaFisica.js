var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PessoaFisica = /** @class */ (function (_super) {
    __extends(PessoaFisica, _super);
    function PessoaFisica(nome, cpf, dataNascimento) {
        var _this = _super.call(this, nome) || this;
        _this.cpf = cpf;
        _this.dataNascimento = dataNascimento;
        return _this;
    }
    PessoaFisica.prototype.calcularIdade = function () {
    };
    PessoaFisica.prototype.fazerAniversario = function () {
        this.idade += 1;
    };
    PessoaFisica.prototype.morreu = function () {
        this.desligarPessoa();
    };
    return PessoaFisica;
}(Pessoa));
