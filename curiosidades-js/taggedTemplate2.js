// é possível contorlar o parse de uma template string com uma funcao tagged template
function real (partes, ...valores) {
  const resultado = []
  valores.forEach((valor, indice) => {
    valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
    // mescla para recompor o array original, pois se fizer a alternancia entre parte e valor
    // consegue recompor a string
    resultado.push(partes[indice], valor)
  })
  return resultado.join('')
}

const preco = 29.99
const precoParcela = 11
console.log(real`1x de ${preco} ou 3x de ${precoParcela}.`)
