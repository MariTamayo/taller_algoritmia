const prompt = require("prompt-sync")({sigint: true})

let num1 = +(prompt("Usuario ingrese el numero 1: "))
let num2 = +(prompt("Usuario ingrese el numero 2: "))

console.log(num1 + num2)