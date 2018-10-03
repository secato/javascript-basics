// process e um objeto padrao que permite realizar entrada e saida padrao

// pegando os parametros da chamada node entradaEsaida -a por exemplo
const anonimo = process.argv.indexOf('-a') !== -1
console.log(anonimo)

<<<<<<< HEAD
if (anonimo) {
  process.stdout.write('Fala Anônimo!\n')
  process.exit()
} else {
  process.stdout.write('Informe o seu nome: ')
  process.stdin.on('data', data => {
    const nome = data.toString().replace('\n', '')
    process.stdout.write(`\nFala ${nome}!!\n`)
    process.exit()
  })
}
=======
if(anonimo) {
    process.stdout.write('Fala Anônimo!\n')
    process.exit()
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n', '')
        process.stdout.write(`\nFala ${nome}!!\n`)
        process.exit()
    })
}
>>>>>>> cd88c9a665b9a97dd4fb2cb0ace6c15f6be37759
