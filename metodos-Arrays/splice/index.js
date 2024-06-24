const names = ['alexandre', 'pedro', 'jose', 'augusto', 'miranda'];
names.splice(0, 3, 'silva', 'matheus', 'andre');
console.log(names)


let cores = ['verde', 'roxa', 'azul', 'vermelho'];
let remvoerCores = cores.splice(2, 1, 'branca');
console.log(cores);
console.log(remvoerCores);