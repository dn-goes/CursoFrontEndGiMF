class Funcionario {
    constructor(nome, salario, cargo) {
        this.nome = nome;
        this.salario = salario;
        this.cargo = cargo;
    }

    aumentarSalario(percentual) {
        this.salario += this.salario * (percentual / 100);
        console.log(`Salário aumentado em ${percentual}%.`);
    }

    exibirInfo() {
        console.log(`Nome: ${this.nome}\nCargo: ${this.cargo}\nSalário: R$${this.salario}`);
    }
}

let funcionario1 = new Funcionario("tião", 2500, "Analista");
funcionario1.exibirInfo();
funcionario1.aumentarSalario(10);
funcionario1.exibirInfo();
