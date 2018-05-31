// ES8      Object.values / Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.keys(obj))

console.log(Object.values(obj))
console.log(Object.entries(obj)) // [chave, valor]


// Melhorias na notacao literal
const nome = 'Carla'

// ja cria o atributo sem ficar atribuindo 
// funcao tbm sem usar function
const pessoa = {
    nome,
    ola() {
        return 'Oi gente!'

    }
}
console.log(pessoa.nome, pessoa.ola())

// Classe (eh convertida para uma funcao, apenas uma convencao sintatica)
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au au!'
    }
}

console.log(new Cachorro().falar())
