const hobbies = ['jogar lol', 'assistir serie', 'jogar roblox', 'ficar com a namorada']

const newHobbie = [...hobbies]
console.log(newHobbie)


const user = {
    name: 'alexandre',
    age: 22,
}

const userAdmin = {
    extendsUser: true,
    ...user
}

console.log(userAdmin)