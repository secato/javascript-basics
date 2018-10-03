exports.rejectPromise = () => {
  new Promise((resolve, reject) => {
    setTimeout(reject, 2000, 'foo')
  })
}
