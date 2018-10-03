function foo () {
  console.log(this.bar)
}

var bar = 'global'

var obj1 = {
  bar: 'obj1',
  foo: foo
}

var obj2 = {
  bar: 'obj2'
}

foo() // undefined, because of node?
obj1.foo() // obj1
foo.call(obj2) // obj2 substitute this inside foo for the thiis of obj2??? INSANE
new foo()
