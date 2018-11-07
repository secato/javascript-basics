let myObject = {
  get a () {
    return 2
  }
}

console.log(myObject.a) // 2

// does nothing because we dont have a set
myObject.a = 3

console.log(myObject.a) // 2

Object.defineProperty(
  myObject, // target
  'b', // property name
  {
    get: function () { return this.a * 2 },
    enumerable: true
  }
)

// MAGIC?
console.log(myObject.b) // 4
myObject.b = 22

console.log(myObject.b) // 4

function myObject2 () {
  let b = null
  return {
    get a () {
      return b
    },
    set a (value) {
      b = value
    }
  }
}

myObject2.a = 3
myObject2.a = 4
console.log('Object B', myObject2.a)
