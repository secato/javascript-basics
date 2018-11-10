var anotherObject = {
  a: 2
}

// myObject will be linked to anotherObject
var myObject = Object.create(anotherObject)

// jesus christ, a was found
console.log(myObject.a)

// proto property
console.log(myObject.__proto__)

for (const key in myObject) {
  console.log(key)
  // by default for in look through prototype chain, this is way this snippet has the code below to check 
  // if the property is from the current object
  /*if (myObject.hasOwnProperty(key)) {
    const element = myObject[key];
    
  }*/
}

anotherObject.a = 3
console.log(myObject.a)

if ('a' in myObject) {
  console.log('in operator go through prototype chain')
}

// the end of a normal prototype chain is the built-in Object.prototype
// Object.prototype includes a variety of common utilities.
console.log(anotherObject.__proto__ === Object.prototype)
console.log('')

console.log(anotherObject.hasOwnProperty('a'))
console.log(myObject.hasOwnProperty('a'))
console.log('')

// shadowing, a is defined in myObject instead of set the value in the prototype
// the process iss
// look at the current object (myObject) if it has the property a
// if  it's true, set the value
// if not look through the prototype chain
// if cannot find in the prototype chain, set in the current object
// but in this case the property is found in the prototype chain, so why this is set to the current object?
// because it's only set on the prototype chain if it have a [[set]]
// and it only work if the anotherObject.a is not marked as read only
myObject.a = 22
console.log(myObject.hasOwnProperty('a'))
console.log('myObj: ' + myObject.a, 'anotherObj: ' + anotherObject.a)

function Foo() {

}

// remember, new create a empty object linked to the Foo object
var b = new Foo()

console.log(Foo.prototype === Object.getPrototypeOf(b))
console.log(b.__proto__)


console.log(Foo.prototype.constructor === Foo) // true

// constructor points to the function it self
// I think that is create to used the ES6 class syntatic sugar
// the object dont have "constructor" property, it will found by the prototype chain
console.log(b.constructor)

var c = new Foo.prototype.constructor()
console.log(Object.getPrototypeOf(c) === Foo.prototype)

var User = function(name) {
  this.name = name
}

var felipe = new User('felipe')
console.log(felipe.name)

// what a heck
var luciana = new felipe.constructor('Luciana')
console.log(luciana.name)

// remember capital letters don't mean anything to JS engine
function baz() {}
var dazz = new baz()
//baz.prototype = {}
console.log(baz.prototype)


