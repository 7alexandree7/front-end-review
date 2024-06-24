const numbers = [3,  6, 9, 4, 1, 7, 2, 5, 8];
const fruits = ['banana', 'uva', 'caja', 'maracuja', 'apple'];

const numbersOrdenado = numbers.sort();
const fruitsOrdenado = fruits.sort();

console.log(numbersOrdenado);
console.log(fruitsOrdenado);


const number2 = [1, 4, 2, 3, 5]

number2.sort((a,b) => {
    if (a < b) {
        return 1
    }
})

console.log(number2)