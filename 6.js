const prompt = require("prompt-sync")({sigint: true})

let R = prompt("Ingresa el valor del radio: ")
let H = prompt("Ingresa el valor de la hipotenusa: ")

let altura = R*R
let base = H*H

let adyacente = Math.sqrt(base - altura)

areaTriangulo = Math.pow((adyacente*R)/2, 2)
areaSemicirculo = (Math.PI * altura)/2

console.log("El area total es: ", areaTriangulo + areaSemicirculo)

