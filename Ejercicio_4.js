const prompt = require("prompt-sync")({sigint: true})

let radio = +prompt("Ingresa el radio: ")
const PI = 3.1416

console.log("El area es: ", PI*(radio**2))