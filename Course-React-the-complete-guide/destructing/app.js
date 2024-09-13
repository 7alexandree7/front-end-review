const user = ['alexandre', 'olivieira']

const firstName = user[0];
const lastName = user[1];

const [primeiroNome, segundoNome] = ['Guilherme', 'oliveira'];
console.log(primeiroNome);
console.log(segundoNome);



const {name: userName, age: idade} = {
    name: 'max',
    age: 21
}

console.log(userName)
console.log(idade)