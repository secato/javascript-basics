// notacao literal para criacao de objeto
const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

// funcao Keys pega todas as chaves de um objeto
console.log(Object.keys(pessoa));

// pega somente os valores
console.log(Object.values(pessoa));

// chave e valor
console.log(Object.entries(pessoa));

// percorrendo e obtendo os valores com o operador destructuring
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(chave, valor)
})

Object.entries(pessoa).forEach(e => {
    console.log(e[0], e[1]);
    
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

// Object.assign (ECMAScript 2015) / concatena os atributos no obj de destino
const dest =  {a: 1}
const o1 = { b: 2}
const o2 = { c: 3, a: 4} // note que o a sera sobrescrito
const obj = Object.assign(dest, o1, o2)

// congela os valores atribuidos
Object.freeze(obj)
obj.c = 1234 // nao vai fazer nada
console.log(obj);




