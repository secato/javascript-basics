const alunos = [
    { nome: 'Joao', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.3, bolsista: true },
    { nome: 'Pedro', nota: 9.5, bolsista: false },
    { nome: 'Ana', nota: 6.5, bolsista: true },
]


// Todos os alunos sao bolsistas?
const resultado = alunos.map(aluno => aluno.bolsista).reduce(function (teste, atual) {
    return teste && atual
})
console.log(resultado)


// Algum aluno é bolsista?
const resultado2 = alunos
                    .map(a => a.bolsista)
                    .reduce((accumulator, currentValue) => accumulator || currentValue)
console.log(resultado2) 