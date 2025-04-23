class Produto {
    constructor(nome, preco, estoque) {
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }

    vender(quantidade) {
        if (this.estoque >= quantidade) {
            this.estoque -= quantidade;
            console.log(`${quantidade} unidades vendidas.`);
        } else {
            console.log("Estoque insuficiente.");
        }
    }

    repor(quantidade) {
        this.estoque += quantidade;
        console.log(`${quantidade} unidades adicionadas ao estoque.`);
    }
    
    exibirInfo() {
        console.log(`Produto: ${this.nome}\nPreço: R$${this.preco}\nEstoque: ${this.estoque}`);
    }
}

let prod1 = new Produto("Camiseta", 50, 100);
prod1.exibirInfo();
prod1.vender(10);
prod1.repor(5);
prod1.exibirInfo();
