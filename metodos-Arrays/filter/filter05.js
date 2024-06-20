const myList = [
    {
        nome:'Suco de limão',
        preco: 80,
        tipo: 'suco'
    },

    {
        nome: 'suco de uva',
        preco: 20,
        tipo: 'suco'
    },

    {
        nome: 'suco de acerola',
        preco: 120,
        tipo: 'suco'
    },

    {
        nome: 'suco de tamarindo',
        preco: 10,
        tipo: 'suco'
    }
]   


const precoBase = 70


function filtrarElementos (elemento) {

    return elemento.preco > precoBase
}


const newArray = myList.filter(filtrarElementos)
console.log(newArray)