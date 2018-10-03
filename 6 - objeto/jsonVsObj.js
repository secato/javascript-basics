// JSON = javascript object notation (formato textual)
// JSON != notacao literal de objeto


const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 'teste',
    
    soma() {
        return a + b + c
    }
}

console.log(obj);
console.log(JSON.stringify(obj));

console.log(JSON.parse(
    `{ "a": 1, "b": 2, "c": 3.5 }`
));

// atencao so funciona nesse formato. ASPAS DUPLAS nas chaves
// valor numero nao precisa de aspas
// string tambem em aspas duplas
// valor booleano eh suportado e nao precisa de aspas
// um objeto dentro outro eh possivel {}
// um array tbm eh possivel []

const objeto = JSON.parse(`{ "a": 1, "b": 2, "c": 3 }`)
console.log(objeto.a);



