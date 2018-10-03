/*
    Pay attention, baby!
    The return of typeof is a string

    Typeof dont is not asking for the "type of a, but
    rather for the "type of the value currently in a."
*/

let a
console.log(typeof a) // undefined

a = 'hello world'
console.log(typeof a) // string

a = 42
console.log(typeof a) // number

a = true
console.log(typeof a) // boolean

a = null
console.log(typeof a) // object, weird, bug?
// realmente um bug, que provavelmente nao sera fixado tao cedo

a = undefined
console.log(typeof a) // undefined

a = { b: 'c' }
console.log(typeof a) // object

a = () => {}
console.log(typeof a) // function
console.log(typeof a === 'function') // true because the return of typeof is a string
