console.log(typeof Array)
console.log(typeof new Array)
console.log(typeof [])

const teste = []
console.log(teste)
console.log(typeof teste)
teste.push(`teste`)
console.log(teste)

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados.length, aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0], aprovados[1])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
console.log(aprovados)

aprovados.push('Teste')
console.log(aprovados.length )

// cria elementos vazios (undefined) no meio do caminho
aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados)
console.log(aprovados.sort())
console.log(aprovados)

delete aprovados[1]
console.log(aprovados)
aprovados.sort()
console.log(aprovados)


aprovados = ['Bia', 'Ana', 'Carlos']
aprovados.splice(1, 1, 'Elemento1', 'Elemento2')
console.log(aprovados)

aprovados.splice(1, 0, 'Eita', 'Treta')
console.log(aprovados)

