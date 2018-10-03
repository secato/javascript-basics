function User () {
  let username, password

  // if i dont return this function it only can be accessed inside this closure
  function doLogin (user, pw) {
    username = user
    password = pw
    console.log(`User: ${user}`, `Password: ${password}`)
  }

  // returning this we can access doLogin indirectly
  const publicAPI = {
    login: doLogin
  }

  return publicAPI
}

let felipe = User()
felipe.login('felipe', 'teste')

// omg loose the username and password inside User() ?
// no, because there's a closure in the login() function keeping them alive.
felipe.login('felipe2', 'teste')
