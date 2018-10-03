console.log(this === global)
console.log(this === exports)


console.log(this === module.exports)


function  logThis(params) {
    console.log('Dentro de uma função...')
    console.log(this === exports)

    // verdadeiro, ficar ligado pq nao estou exportando como omdulo
    // estou jogando dentro do contexto global
    console.log(this === global)
}

logThis()

