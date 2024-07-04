interface Humano {
    nome: string
    idade: number
    homem?: boolean
    saudar(sobreNome: string): void
}


function saudacao (pessoa: Humano) {
    console.log(`Ola ${pessoa.nome}`)
}

function dizerIdade (pessoa: Humano) {
    console.log(`Minha idade é ${pessoa.idade}`)
}

function souHomem (pessoa: Humano) {
    console.log(`eu sou homem? ${pessoa.homem}`)
}


const pessoa: Humano = {
    nome: "alexandre",
    idade: 22,
    homem: true,
    saudar(sobreNome: string) {
        console.log(`Ola meu nome é ${this.nome} ${sobreNome}`)
    }
}


saudacao(pessoa);
dizerIdade(pessoa);
souHomem(pessoa);
pessoa.saudar(`oliveira`)



class Cliente implements Humano {

    nome: string = "";
    ulimaCompra: Date = new Date()
    idade: number = 30;
    saudar(sobreNome: string): void {
        console.log(`Ola meu nome é ${this.nome} ${sobreNome}`)
    }
}


const meuCliente = new Cliente()
meuCliente.nome = "alexandre";
meuCliente.saudar("pereira");
console.log(meuCliente.ulimaCompra)