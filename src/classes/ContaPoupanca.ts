import { Conta } from "./Conta";

export class ContaPoupanca extends Conta {
    constructor(agencia: number, numero: number) {
        super(agencia, numero)
        this.saldo = 50;
    }
}