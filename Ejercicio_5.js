const prompt = require("prompt-sync")({sigint: true})

let A = +prompt("Ingresa el lado A: ")
let B = +prompt("Ingresa el lado B: ")
let C = +prompt("Ingresa el lado C: ")


//area de rectangulo

let areaRectangulo = B*C
// console.log(`El area del rectangulo es: ${areaRectangulo}`)
let areaTriangulo = (B*(A-C))/2 
// console.log(`El area del triangulo es: ${areaTriangulo}`)
console.log("El area total es: " , (areaRectangulo + areaTriangulo))
