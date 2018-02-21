// Object.preventExtensions (não parmite que o objeto seja extendido (aumentar o numero de atributos))

const produto = Object.preventExtensions({
    nome: 'Iphone X',
    valor: 7150
})

produto.empresa = 'Apple'
console.log(produto);

console.log('Extensível: ', Object.isExtensible(produto));

delete produto.valor
console.log(produto);

//Object.seal (nao consegue adicionar nem excluir elementos mas consegue mexer nos atributos)
const pessoa = { nome: 'Felipe', idade: 35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa));

// Object.freeze = selado + valores constantes

