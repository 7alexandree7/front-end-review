const frutas = [
    'manga',
    'maçã',
    'uva',
    'pera',
    'maracuja',
    'melancia',
    'abobora'
]


const filtrarArray = frutas.filter((fruta) => fruta.startsWith('m'));
console.log(filtrarArray);