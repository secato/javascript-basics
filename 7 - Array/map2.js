const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.95 }',
    '{ "nome": "Kit de lapis", "preco": 43.23 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]


let precos = carrinho
    .map(produtoJSON => JSON.parse(produtoJSON))
    .map(produto => produto.preco)



console.log(precos)