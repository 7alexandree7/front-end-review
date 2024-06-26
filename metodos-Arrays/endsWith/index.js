const frutas = [
    'manga',
    'maçã',
    'uva',
    'morango',
    'melão',
    'kiwi',
    'mamão'
]

const filtrarArray = frutas.filter((frutas) => frutas.endsWith('a'));
console.log(filtrarArray);