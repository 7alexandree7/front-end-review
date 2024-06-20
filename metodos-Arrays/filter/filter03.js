let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


const numPares = (num) => {

    if (num % 2 === 0) {
        return num;
    }
}


let newArray = numeros.filter(numPares);
console.log(newArray);