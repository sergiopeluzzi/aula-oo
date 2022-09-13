export class Conta {
    agencia: number;
    numero: number;
    saldo: number;
    limite: number;

    constructor(agencia: number, numero: number) {
        this.agencia = agencia;
        this.numero = numero;
        this.saldo = 0;
        this.limite = 0;
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

    pix(valor: number, conta: Conta): void {
        this.sacar(valor);
        conta.depositar(valor);
    }
}

