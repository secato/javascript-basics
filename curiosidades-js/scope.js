function outer () {
  var a = 'outer'

  function inner () {
    var b = 'inner'

    // inner can access a
    console.log(a)
  }

  // error, b is not defined ( because it is only accessible inside the inner scope )
  // console.log(b)

  inner()
}

outer()
// a is not defined, because it is inside the scope of outer function
// console.log(a)
