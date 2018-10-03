// coerção de valores não booleanos para booleanos
console.log()

// verdadeiros
const meuArray = []

if (meuArray) {
  console.log('verdadeiro')
}

const meuObj = {}
if (meuObj) {
  console.log('verdadeiro')
}

function foo () {

}

if (foo) {
  console.log('verdadeiro')
}

if (foo()) {
  // nao entra pois é false
  // note que a funcao foo nao retorna nada
  // ou seja, implicitamente ela retorna undefined
  // e undefined é falso nesse propósito
}

if (!foo()) {
  console.log('verdadeiro')
}
