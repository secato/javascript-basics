const nums = [1, 2, 3, 4, 5]

// map retorna um novo array de mesmo tamanho com os dados transformados (for each com mais proposito)
let resultado = nums.map(function (e) {
    return e * 2
})

// map nao modifica o array atual

console.log(resultado)

// encadeamento de maps

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums
            .map(soma10)
            .map(triplo)
            .map(paraDinheiro)


console.log(resultado)
