// Function with closure
const createTipper = (percentage) => {
  return (tipAmount) => {
    return tipAmount * percentage
  }
}

const tip20 = createTipper(.20)
const tip50 = createTipper(.50)
const tip75 = createTipper(.75)
console.log(tip20(70))
console.log(tip50(50))
console.log(tip75(120))

// setTimeout function
setTimeout(() => {
  console.log('this is a string')
}, 2000)

//Promise
const getDataPromise = (data) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`Testing output for Promise: ${data}`)
  }, 1000)
})

const promiseTest = getDataPromise(54321)
promiseTest.then((data) => {
  console.log(data)
}, (err) => {
  console.log(err)
})
