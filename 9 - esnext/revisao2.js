// ARROW FUNCTION
// sintaxe reduzida
// return implicito(quando nao tem o corpo da funcao)
// prioriza funcoes de uma unica linha
// funcoes arrow sao anonimas, nao tem como atribuir nome
// com um unico parametro nao preciso colocar os parenteses
// se colocar corpo na funcao preciso fazer um return
const soma = (a, b) => a + b
console.log(soma(2, 3))

// Arrow Function THIS
// o this na arrow function esta relacionado ao contexto lexico de onde a funcao foi escrita
// no caso como foi escrito diretamente dentro do modulo (arquivo do node), vai apontar para exports (ou module.exports)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({}) // mesmo tentando forcar com o bind nao e possivel
lexico1()
lexico2()

// parametro default 
function log(text = 'Node') {
    console.log(text)
}

log()
log('Teste')

// operador rest/spread
// rest agrupar
// spread espalhar

// no contexto de funcao seria mais para o nome REST
// agrupa todos os parametros numa estrutura do tipo array
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(2,4,6))

