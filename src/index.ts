class Pessoa {
    nome: string;
    dataDeNascimento: string;
    cpf: string;

    constructor(nome: string, dtNasc: string, cpf: string) {
        this.nome = nome;
        this.dataDeNascimento = dtNasc;
        this.cpf = cpf;
    }

    fazerSaudacao() {
        console.log("Meu nome é: " + this.nome);
    }
}

const p1 = new Pessoa("Sergio", "1985-11-25", "000.000.000-00");
const p2 = new Pessoa("Joana", "1995-10-05", "111.111.111-11");

class ContaBancaria {
    agencia: number;
    numero: number;
    saldo: number = 0;
    limite: number = 0;
    tipo: string;

    constructor(agencia: number, numero: number, tipo: string) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
    }

    mostrarSaldo() {
        console.log("Saldo atual: " + this.saldo);
    }

    mostrarSaldoComLimite() {
        const saldoTotal: number = this.limite + this.saldo;
        console.log("Saldo atual com limite: " + saldoTotal.toFixed(2));
    }

    depositar(valor: number) {
        if (valor > 0) {
            this.saldo += valor;
            console.log(
                "Depósito de R$" + valor.toFixed(2) + " efetuado com sucesso!"
            );
        } else {
            console.log("Valor informado inválido");
        }
    }

    sacar(valor: number) {
        const saldoTotal: number = this.limite + this.saldo;
        if (valor <= saldoTotal) {
            this.saldo -= valor;
            console.log(
                "Saque de R$" + valor.toFixed(2) + " efetuado com sucesso!"
            );
        } else {
            console.log("Valor informado inválido");
        }
    }

    adicionarLimite(valor: number) {
        if (valor > 0) {
            this.limite += valor;
            console.log(
                "Limite de R$" + valor.toFixed(2) + " adicionado com sucesso!"
            );
        } else {
            console.log("Valor informado inválido");
        }
    }
}

const cb1 = new ContaBancaria(111, 111, "Corrente");
const cb2 = new ContaBancaria(111, 222, "Poupança");

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
