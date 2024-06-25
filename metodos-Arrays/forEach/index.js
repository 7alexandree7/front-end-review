const first = ['mouse', 'teclado', 'mousepad', 'monitor', 'cadeira-gamer'];
first.forEach((element) => { 
    console.log(element);
})


const array1 = ['a', 'b', 'c', 'd'];
array1.forEach((element) => {
    console.log(element)
})

//------------------------------------------------------------------------------------------------------------------------

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function tabuadaDe2 (item) {
    console.log(item*2);
}

numeros.forEach(tabuadaDe2);

//-----------------------------------------------------------------------------------------------------------------------

sd = [0, 1, 2, 3, 4, 5 ,6 ,7 ,8 ,9 ,10];
total = 0

function somar (item) {

    return total += item
}


sd.forEach(somar)
console.log(total)

//-----------------------------------------------------------------------------------------------------------------------

const users = [
    
    {name:'alexandre', age: 21, contact: '(71) 9 9198-7331' },
    {name:'samuel', age: 24, contact: '(71) 9 9876- 3224' },
    {name:'pedro', age: 12, contact: '(11) 9 9397-7231' },
    {name:'nathan', age: 18, contact: '(33) 9 8798-3481' },
]

users.forEach((element, indice) => {

    if (element.age < 18) {
        console.log(`${element.name} é menor de idade`)
    }

    else {
        console.log(`${element.name} é maior de idade`)
    }
})
