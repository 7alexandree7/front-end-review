export default class Produto {

    #id
    #nome
    #preco


    constructor(id, nome, preco) {

        this.#id = id
        this.#nome = nome
        this.#preco = preco 
    }

    get id () {
        return id
    }

    get nome () {
        return nome
    }

    get preco () {
        return preco
    }
}
