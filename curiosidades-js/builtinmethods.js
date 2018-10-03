let nome = 'felipe'
console.log(typeof nome) // string, tipo primitivo

// teria um tipo primitivo um prototipo?
// sim, no caso o prototipo de um tipo primitivo string é o objeto nativo String
// note o S maiusculo
console.log(nome.__proto__)

// por isso é possível utilizar certas operações já prontas nos tipos primitivos
// como por exemplo
console.log(nome.length)
