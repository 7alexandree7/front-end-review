function isBig(value) {
    return value >= 10
}


const myArray = [10, 4, 324, 3, 87, 9, 16];
const MyArrayFilter = myArray.filter(isBig);

console.log(MyArrayFilter)