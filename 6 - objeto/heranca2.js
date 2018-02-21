// Cadeia de protótipos (prototype chain)

const avo = { attr1: 'A' } // tem como __proto__  o Object.prototype
const pai = { __proto__: avo, attr2: 'B'}
const filho = { __proto__: pai, attr3: 'C'}

console.log(filho.attr1);
// note que filho nao tem o atributo 1, a linguagem ira procupar no seu pai
// note que no pai tambem nao tem entao vai procurar no pai do pai e assim sucessivamente
// sera impresso o attr1 declarado no AVO nesse caso


console.log(filho.attr0); // undefined

Object.prototype.attr0 = '0'
console.log(filho.attr0); // filho -> pai -> avo -> Object.prototype


const carro = {
    acelerar() {
        console.log('runnnnnnnnnn ' + this.vel);
    }
}

const ferrari = {
    modelo: 'spider',
    vel: 350
}

ferrari.__proto__ = carro
ferrari.acelerar()
console.log(ferrari.modelo);

