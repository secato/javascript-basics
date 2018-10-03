var foo = {
  a: 42
}

// the parameter of object create is the object that is to be
// a prototype
// in other words, create 'bar' and link it to 'foo'
var bar = Object.create(foo)

bar.b = 'Hello World!'

console.log(bar.b) // Hello World!
console.log(bar.a) // ? does not exists ? why this print 42?

// Because js look for the prototype chain, and foo
// is prototype of bar and already contains a variable a = 42
