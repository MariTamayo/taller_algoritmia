const prompt = require("prompt-sync")({sigint:true})

let Altura= +prompt("Ingrese la altura de la alberca: ")
let Largo= +prompt("Ingrese el largo de la alberca: ")
let Ancho= +prompt("Ingrese el ancho de la alberca: ")
let v= Altura*Largo*Ancho
console.log("El volumen en metros cubicos es: ", v)
let metroCubico= prompt("Ingrese el costo de metroCubico")
console.log("El costo del metroCubico es: ", metroCubico * v)

