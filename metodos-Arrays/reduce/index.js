const numeros = [0, 1, 2, 3, 4, 5, 6, 7 ,8, 9, 10]

const total = numeros.reduce((acumulador, numero, indicie, array) => {
    console.info(`${acumulador} total ate o momento`);
    console.log(`${numero} numero atual`);
    console.log(`${indicie} Indicie atual`);
    console.log(`${array} Array original`);

    return acumulador += numero
},0)

console.warn('Acabou');
console.log(total)