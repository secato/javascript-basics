// let e const 
{
    var a = 2
    let b = 3
    console.log(b)
}

console.log(a)
// console.log(b) // not defined, let tem escopo de bloco
// var tem escopo global

// template string 
const produto = 'iPad'
console.log(`${produto} e caro!`)

// template string respeita a formatacao 
console.log(`${produto}             e caro!`)
console.log(`${produto}      
       e caro!`)

// destructuring (tirar algo de dentro de uma estrutura)

// string
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

// array
const [x, y] = [1, 2, 3]
console.log(x, y)

const [primeiro, , terceiro] = [1, 2, 3]
console.log(primeiro, terceiro)

// objeto
const { idade, nome } = { nome: 'Ana', idade: 9 }
console.log(idade, nome)

// objeto e renomeando
const { idade: age, nome: name } = { nome: 'Ana', idade: 9 }
console.log(age, name)
