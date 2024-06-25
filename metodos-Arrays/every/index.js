const numeros = [1, 2, 3, 1, 1, 3, 3, 2]

const exibir = numeros.every((element) => element < 10);
console.log(exibir)


const users = [
    
    {name:'alexandre', age: 21, contact: '(71) 9 9198-7331' },
    {name:'samuel', age: 24, contact: '(71) 9 9876- 3224' },
    {name:'pedro', age: 12, contact: '(11) 9 9397-7231' },
    {name:'nathan', age: 18, contact: '(33) 9 8798-3481' },
]

const filtrarIdade = users.every((element) => element.age > 18)
console.log(filtrarIdade)