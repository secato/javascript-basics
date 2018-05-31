// set
// estrutura de conjunto
// nao indexada
// nao aceita repeticao

const times = new Set()
times.add('Vasco')
times.add('Sao Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('Vasco')) // true
console.log(times.has('vasco')) // false, case sensitive

const deletou = times.delete('Flamengo') // funcao delete returna true ou false se deletou
console.log(deletou) // true

console.log(times.has('Flamengo')) // false

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)

