// == means equality with coercion
// === strict equality (no coercion allowed)

// cuidado ao verificar objetos (arrays e funcoes tbm, pois são tipos especiais de objeto)
// nesse caso a comparação é feito somente das referências, não do valor em si

let a = [1, 2, 3]
let b = [1, 2, 3]

console.log(a == b) // ??? deveria ser true nao? mas é falso, pois aponta para lugares diferentes

// todavia
b = a

console.log(a == b) // verdade pois B passou a apontar para o mesmo lugar de A

// A coerção de um array é uma string com os valores concatenados, logo
let c = '1,2,3'

console.log(a == c) // verdade, pois a será convertido para '1,2,3'
console.log(a === c) // falso, pois a igualdade estrita nao realiza a coercao
