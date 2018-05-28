const alunos = [
    { nome: 'Joao', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.3, bolsista: true },
    { nome: 'Pedro', nota: 9.5, bolsista: false },
    { nome: 'Ana', nota: 6.5, bolsista: true },
]

const resultado = alunos
    .map(a => a.nota)
    .reduce(function (acumulador, atual) {
        console.log(acumulador,atual)
        return acumulador + atual
    })

console.log(resultado)


// passando um valor inicial, not eque eh DEPOIS da callback
// const resultado = alunos
//     .map(a => a.nota)
//     .reduce(function (acumulador, atual) {
//         console.log(acumulador,atual)
//         return acumulador + atual
//     }, 10)