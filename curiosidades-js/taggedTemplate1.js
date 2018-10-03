// tagged templates - process template string inside function

// partes da string (array) sem aquilo que foi interpolado
// o array de valores tem quilo que foi imterpolado
// resultado da funcao é dois arrays
function tag (partes, ...valores) {
  console.log(partes)
  console.log(valores)
  return 'Outra string'
}

const aluno = 'Gui'
const situacao = 'Aprovado'

console.log(tag`${aluno} está ${situacao}`)
