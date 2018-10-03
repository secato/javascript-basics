const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

// remove o ultimo elemento
pilotos.pop()
console.log(pilotos)

// adiciona na ultima posicao
pilotos.push('Verstappen')
console.log(pilotos)

// tipo o pop, mas tira da primeira posicao
pilotos.shift()
console.log(pilotos)

// tipo o push, coloca no inicio
pilotos.unshift('Hamilton')
console.log(pilotos)

// splice pode adicionar e remover elmentos (substituir tbm)

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1)
console.log(pilotos)

// splice retorna um novo array, a partir de um indice
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

// de 1 até 3 (o 4 não entra)
const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)