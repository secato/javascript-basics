function rejectPromise () {
  return new Promise(function (resolve, reject) {
    setTimeout(reject, 2000, new Error('deu ruim'))
  })
}

async function teste () {
  try {
    const resultado = await rejectPromise()
  } catch (error) {
    console.error(error.message)
  }
}
teste()
console.log('só vai')
