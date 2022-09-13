export class PessoaJuridica extends Pessoa {
    cnpj: string;
    dataAbertura: string;

    constructor(nome: string, cnpj: string, data: string) {
        super(nome)
        this.cnpj = cnpj;
        this.dataAbertura = data;
    }

    faliu() {
        this.desligarPessoa()
    }
}