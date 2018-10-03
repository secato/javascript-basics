function makeAdder (x) {
  // paramater x is a inner variable

  // add is a inner function that has acccess to the parent variable ( in this case variable x)
  // and that add function receive a y parameter
  function add (y) {
    // this is the body of the function that just do a sum
    return y + x
  }

  // note that this function returns ANOTHER function
  return add
}

// in the first time we call the function makeAdder with parameter 10
// this function runs and then returns another function that can access the first value passed
let plusTwo = makeAdder(10)

// so we can call the function with the () passing another value
console.log(plusTwo(2)) // 12

// because of closure, this inner fuction (add) keeps the "memory" of the value passed in the beginning

// another example

let plustThree = makeAdder(5)
const theSum = plustThree(3)
console.log(theSum)
