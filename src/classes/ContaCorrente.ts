import { Conta } from "./Conta";

export class ContaCorrente extends Conta {
    constructor(agencia: number, numero: number) {
        super(agencia, numero)
    }
}