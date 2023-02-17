// Promises: Then/Catch
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
     //resolve("Promise executed successfully")
     reject("reject promise")
    }, 3000) 
 })
 
 // debemos definir un contexto de resolución de la promesa
 // forma 1
 promise.then(() => {
     console.log("promise resolve ok")
 }, (error) => {
     console.log(error)
 })
 
 // forma 2
 promise.then(() => {
     console.log("promise resolve ok")
 }).catch((error) => {
     console.log(error)
 })
 
 // forma 3
 promise.then(() => {
     console.log("promise resolve ok")
 })
 
 promise.catch((error) => {
     console.log(error)
 })