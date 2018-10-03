// ambos verdadeiro
console.log(module.exports === this)
console.log(module.exports === exports)

// vai exportar o a
this.a = 1

// vai exportar o b
exports.b = 2

// vai exportar o c normalmente
module.exports.c = 3

exports = null

// note que continua tudo aqui, isso pois exports aponta para o mesmo lugar em memoria
console.log(module.exports)


// nao vai funcionar pois o exports ainda continua apontando para o mesmo lugar
exports = {
    nome: 'Teste'
}

console.log(module.exports)

// a forma correta de exportar é essa:
module.exports = { publico: true }