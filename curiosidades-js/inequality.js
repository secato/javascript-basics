let a = 41
let b = '42'
let c = '43'

// NOTE QUE NAO TEM INIGUALDADE ESTRITA, é SEMPRE COM COERCAO
// operadores COMO <=. >, <

console.log(b < c) // verdadeiro
// verdadeiro pois a especifica do ES5 fala que se ambos forem string
// compara-se lexograficamente, como se fosse um dicionário

// mas se um dos dois não é uma string, tenta converter para número e ai é realizado
// a comparação normal de números
console.log(a < b) // verdadeiro

// Outro exemplo com strings
a = 'a'
b = 'b'
console.log(a < b) // verdadeiro, lembra do "dicionário"

let x = 42
let y = 'foo'

console.log(x < y) // false
console.log(x > y) // false
console.log(x == y) // false

// Todas deram false, pois 'foo' será convertido para NaN
// Not a number, a especificação fala que não pode ser maior nem menor que qualquer outro valor

console.log('-----------') // pular linha

// OUTRO EXEMPLO
let obj = {}
let str = 'string'
let str2 = 'string2'

console.log(str == str2) // falso, ambos já estão em string, não tem coerção e as strings são diferentes (lexographically)
console.log(str < str2) // verdadeiro, lexographically

console.log(obj > str) // string possivelmente será convertido para NaN, falhando a comparação
// lembre-se que objeto é complicado de comparar pois são referências (endereço de memória)
