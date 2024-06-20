const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterArray (num) {

    if (num % 2 === 0) {
        return num;
    }
}

const newArray = myArray.filter(filterArray);
console.log(newArray);