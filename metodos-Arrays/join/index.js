const users = [
    
    {name:'alexandre', age: 21, contact: '(71) 9 9198-7331' },
    {name:'samuel', age: 24, contact: '(71) 9 9876- 3224' },
    {name:'pedro', age: 12, contact: '(11) 9 9397-7231' },
    {name:'nathan', age: 18, contact: '(33) 9 8798-3481' },
]


const pegarNome = users.map((element) => {
    return element.name
})


const exibirNome = pegarNome.join(' ')
console.log(exibirNome)



const people = ['joana', 'ana', 'vitoria', 'gabriela'];

const peopleJ = people.join(' ');
console.log(peopleJ)