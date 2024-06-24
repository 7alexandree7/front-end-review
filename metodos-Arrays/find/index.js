const array = [1, 2, 3, 4, 5, 6, 12, 14, 15, 20, 32];

const arrayFind = array.find((element) => element > 10);
console.log(arrayFind);



const vogal = ['a', 'e', 'i', 'o' , 'u'];
const buscarVogal = vogal.find((element) => element === 'a');

console.log(vogal);
console.log(buscarVogal);


const pizzas = [
    'peperone',
    'calabresa',
    'portuguesa',
    'catupiri',
    'baiana',
]

const acharPizza = pizzas.find((elemnet) => elemnet.startsWith('p'));
console.log(acharPizza);


const frutas = [
    {name: 'cereja', quantidade: 4},
    {name: 'maça', quantidade: 2},
    {name: 'pera', quantidade: 9},
]

const pegarFrutas = frutas.find((element) => element.name === 'cereja')
console.log(pegarFrutas)