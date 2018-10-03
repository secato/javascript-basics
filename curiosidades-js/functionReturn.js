/*
    In JS there is only FUNCTIONS
    a function that dont have return implicit return undefined
*/

function thisReturn () {
  return 'teste'
}

function thisDoNothing () {
  // do nothing
  // implicit return undefined
}

console.log(thisReturn())
console.log(thisDoNothing())

let a = thisDoNothing()
console.log(a)
