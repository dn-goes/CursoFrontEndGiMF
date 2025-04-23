class Veiculo {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    exibirInfo() {
        console.log(`Marca: ${this.marca}\nModelo: ${this.modelo}\nAno: ${this.ano}`);
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo, ano, quantidadePortas) {
        super(marca, modelo, ano);
        this.quantidadePortas = quantidadePortas;
    }

    exibirInfo() {
        super.exibirInfo();
        console.log(`Portas: ${this.quantidadePortas}`);
    }
}

let carro1 = new Carro("Volkswagen", "Fusca", 2400, 2);
carro1.exibirInfo();
