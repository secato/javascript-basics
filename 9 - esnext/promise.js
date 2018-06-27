// Usa-se promise quando tem processamento assincrono

// Os principais "caminhos da promise" são:
// ela pode ser resolvida
// ou rejeitada

// é um recurso novo do ES6
// antes era usado callback
// a promise tem um background funcional
// pois pode ser feito um encadeamento de promises


// A PROMISE ACEITA APENAS UM PARAMETRO NO RESOLVE
function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
            // vai ser pega no "catch"
            // reject(frase)
        }, segundos * 1000);
    })
}

falarDepoisDe(5, 'Olá mundo!')
    .then(result => result.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(console.error)