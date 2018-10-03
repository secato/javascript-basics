const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Ipad Pro', preco: 5499, fragil: true },
    { nome: 'Copo de vidro', preco: 12.99, fragil: true },
    { nome: 'Copo de plástico', preco: 2.99, fragil: false }
]

// console.log(produtos.filter(function (p) {
//     return p.preco > 500 && p.fragil === true
// }))

const produtosFrageisCaros = produtos
    .filter(p => p.preco > 500)
    .filter(p => p.fragil === true)

console.log(produtosFrageisCaros)


// usando funcoes
const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))