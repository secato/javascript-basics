const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

// Todo objeto tem um atributo __proto__ que aponta para o seu pai
// mesmo que o pai seja um o objeto vazio {}`
// o objeto Object tem o prototype ao invés de __proto__ mas é o mesmo tipo de dado

console.log(ferrari.__proto__);
console.log(ferrari.__proto__ === Object.prototype);
console.log(volvo.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);

function MeuObjeto() {}
console.log(Object, typeof MeuObjeto);
console.log(Object.prototype, MeuObjeto.prototype);


// Object.prototype.__proto__ aponta para null ou seja
// Object.prototype é o ultimo "Pai" na cadeia da herança

