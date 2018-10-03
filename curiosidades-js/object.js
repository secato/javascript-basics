// Literal object
// key -> value
let obj = {
  a: 'hello world',
  b: 42,
  c: true
}

console.log(obj.a)
console.log(obj.b)
console.log(obj.c)

// acessando atraves de chave
// util quando vc tem a chave armazenada numa variavel
let key = 'a'
console.log(obj['a'])
console.log(obj['b'])
console.log(obj['c'])
console.log(obj[key]) // hello world
