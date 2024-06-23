const people = [
    {
        id:1,
        nome: 'alexandre',
        idade: 21
    },

    {
        id:2,
        nome: 'pedro',
        idade: 18
    },

    {
        id:3,
        nome: 'vitoria',
        idade: 64
    },

    {
        id:4,
        nome: 'maria',
        idade: 11
    },
]

const peopleFilter = people.filter(p => p.nome.includes('ia'));
console.log(peopleFilter)