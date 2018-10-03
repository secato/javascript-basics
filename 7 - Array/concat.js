const filhas = [
    'Valeskah',
    'Cibalena'
]

const filhos = [
    'Uoxiton',
    'Uesclei'
]

const todos = filhas.concat(filhos)
console.log(todos, filhas, filhos)


const todosMaisUm = filhos.concat(filhas, 'Fulana')
console.log(todosMaisUm)

// exemplo tosco
console.log([].concat([1,2], [3,4], 5, [[6, 7]]))


