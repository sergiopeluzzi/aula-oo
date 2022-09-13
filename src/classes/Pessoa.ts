export class Pessoa {
    nome: string;
    ativo: boolean;

    constructor(nome: string) {
        this.nome = nome;
        this.ativo = true;
    }

    fazerSaudacao() {
        console.log("Meu nome é: " + this.nome);
    }

    desligarPessoa() {
        this.ativo = false;
    }
}
