class PessoaFisica extends Pessoa {
    cpf: string;
    dataNascimento: string;
    idade: number;

    constructor(nome: string, cpf: string, dataNascimento: string) {
        super(nome)
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
    }

    calcularIdade() {

    }

    fazerAniversario() {
        this.idade += 1
    }

    morreu() {
        this.desligarPessoa()
    }
}