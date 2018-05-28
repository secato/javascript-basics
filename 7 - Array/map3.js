Array.prototype.map2 = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.95 }',
    '{ "nome": "Kit de lapis", "preco": 43.23 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]


let precos = carrinho
    .map2(produtoJSON => JSON.parse(produtoJSON))
    .map2(produto => produto.preco)



console.log(precos)