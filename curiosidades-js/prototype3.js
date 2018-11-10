//prototyal style code

function Foo(name) {
  this.name = name
}

Foo.prototype.hello = function () {
  console.log('Hello ' + this.name)
}


function Bar(name, label) {
  // like super() call
  Foo.call(this, name)
  
  this.label = label
}

// Object create creates an object linked to target object
Bar.prototype = Object.create(Foo.prototype)

Bar.prototype.myLabel = function() {
  return this.label
}

var a = new Bar('a', 'obj a')
a.hello()
console.log(a.myLabel())